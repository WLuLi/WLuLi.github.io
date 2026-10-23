(() => {
  'use strict';
  function mountLayerStudio(prefix, catalog) {
  const $ = id => document.getElementById(id.replace(/^composition-/, `${prefix}-`));
  const studio = $('composition-studio');
  if (!studio || !Array.isArray(catalog) || !catalog.length) return;
  const section = studio.closest('section');
  section.hidden = false;
  const all = selector => section.querySelectorAll(selector);
  const decomposing = prefix === 'decomposition';

  const stage = $('composition-stage');
  const canvas = $('composition-canvas');
  const progress = $('composition-progress');
  const play = $('composition-play');
  const isolate = $('composition-isolate');
  const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, selected = 0, visibleCount = 0, view = decomposing ? 'input' : 'composed', channel = 'rgba';
  let ready = false, inView = false, isolated = false, loadVersion = 0;
  let playback = 0, playing = false, currentLoad = null;
  let planes = [], layerButtons = [];
  const spread = $('composition-spread');
  const orbitButton = $('composition-orbit');
  const defaults = { yaw: -38, pitch: 16, zoom: 1, spread: 1 };
  const orbit = { ...defaults };
  const camera = { yaw: 0, pitch: 0, zoom: 1, spread: 0 };
  const velocity = { yaw: 0, pitch: 0 };
  let cameraFrame = 0, lastFrame = 0, autoOrbit = false, gesture = null;
  let editor = null, extractionProgress = 1, splitRun = null;
  let inspectionVersion = 0;
  const inspectionImages = new Map();
  let canvasWidth = 0, canvasHeight = 0, baseDepth = 0;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const announce = text => { const output = $('demo-status'); if (output) output.textContent = text; };
  const scene = () => catalog[current];
  const playIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m8 5 11 7-11 7Z"/></svg>';
  const pauseIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>';

  function fitCanvas() {
    const ratio = scene().width / scene().height;
    canvasWidth = Math.round(Math.min(stage.clientWidth * .78, (stage.clientHeight - 125) * ratio));
    canvasHeight = Math.round(canvasWidth / ratio);
    baseDepth = Math.min(460, Math.min(canvasWidth, canvasHeight) * 1.05);
    canvas.style.setProperty('--canvas-width', `${canvasWidth}px`);
    canvas.style.setProperty('--canvas-height', `${canvasHeight}px`);
    $('composition-world').style.setProperty('--canvas-width', `${canvasWidth}px`);
    $('composition-world').style.setProperty('--canvas-height', `${canvasHeight}px`);
    requestCamera();
  }

  function updateCameraControls() {
    const disabled = !ready || isolated;
    spread.disabled = disabled;
    spread.value = String(Math.round(orbit.spread * 100));
    $('composition-spread-value').textContent = `${spread.value}%`;
    $('composition-zoom-value').textContent = `${Math.round(orbit.zoom * 100)}%`;
    $('composition-zoom-out').disabled = disabled || orbit.zoom <= .65;
    $('composition-zoom-in').disabled = disabled || orbit.zoom >= 1.6;
    $('composition-reset').disabled = disabled;
    orbitButton.disabled = disabled || motionQuery.matches;
    orbitButton.title = motionQuery.matches ? 'Automatic motion is off with your reduced-motion preference' : 'Slowly orbit the layer stack';
    orbitButton.setAttribute('aria-pressed', String(autoOrbit));
    orbitButton.querySelector('span').textContent = autoOrbit ? 'Pause orbit' : 'Auto orbit';
    studio.classList.toggle('is-orbiting', autoOrbit);
  }

  function stopOrbit() {
    autoOrbit = false; velocity.yaw = 0; velocity.pitch = 0;
    updateCameraControls();
  }

  function cancelGesture() {
    editor?.cancel();
    if (!gesture) return;
    const id = gesture.id; gesture = null;
    studio.classList.remove('is-dragging');
    if (stage.hasPointerCapture(id)) stage.releasePointerCapture(id);
  }

  // Fit the projected corners of the stack, including perspective. At 100% zoom,
  // wide scenes and deep stacks stay inside the viewer even after a full orbit.
  function cameraScale(depth) {
    const rx = camera.pitch * Math.PI / 180, ry = camera.yaw * Math.PI / 180;
    const halfWidth = Math.max(1, (stage.clientWidth - 62) / 2);
    const halfHeight = Math.max(1, (stage.clientHeight - 110) / 2);
    let scale = 1;
    for (const x of [-canvasWidth / 2, canvasWidth / 2]) {
      for (const y of [-canvasHeight / 2, canvasHeight / 2]) {
        for (const z of [-depth / 2, depth / 2 + 12 * camera.spread]) {
          const rotatedX = x * Math.cos(ry) + z * Math.sin(ry);
          const rotatedZ = -x * Math.sin(ry) + z * Math.cos(ry);
          const rotatedY = y * Math.cos(rx) - rotatedZ * Math.sin(rx);
          const finalZ = y * Math.sin(rx) + rotatedZ * Math.cos(rx);
          const extentX = Math.abs(rotatedX) + halfWidth * finalZ / 1300;
          const extentY = Math.abs(rotatedY) + halfHeight * finalZ / 1300;
          if (extentX > 0) scale = Math.min(scale, halfWidth / extentX);
          if (extentY > 0) scale = Math.min(scale, halfHeight / extentY);
        }
      }
    }
    return scale * camera.zoom;
  }

  function paintCamera() {
    const depth = baseDepth * camera.spread;
    studio.style.setProperty('--stage-tilt-x', `${camera.pitch.toFixed(3)}deg`);
    studio.style.setProperty('--stage-tilt-y', `${camera.yaw.toFixed(3)}deg`);
    studio.style.setProperty('--stage-scale', cameraScale(depth).toFixed(4));
    studio.style.setProperty('--stack-depth', `${depth.toFixed(2)}px`);
    const lift = Math.min(9, baseDepth / Math.max(1, scene().layers.length - 1) * .45);
    studio.style.setProperty('--selected-lift', `${(camera.spread * lift).toFixed(2)}px`);
    paintExtraction();
    editor?.update();
  }

  function paintExtraction() {
    if (!decomposing) return;
    studio.style.setProperty('--extraction-progress', extractionProgress.toFixed(6));
    studio.style.setProperty('--input-layer-opacity', (1 - extractionProgress).toFixed(6));
    studio.classList.toggle('is-source-split', view !== 'input' && extractionProgress < 1);
  }

  function animateCamera(now) {
    cameraFrame = 0;
    const dt = lastFrame ? Math.min(40, now - lastFrame) : 16;
    lastFrame = now;
    const handingOff = decomposing && !splitRun?.paused && extractionProgress < 1;
    const expanded = view === 'exploded' && !isolated;
    if (expanded && !gesture && !motionQuery.matches) {
      if (autoOrbit) orbit.yaw += dt * .014;
      else {
        orbit.yaw += velocity.yaw * dt;
        const pitch = orbit.pitch + velocity.pitch * dt;
        orbit.pitch = clamp(pitch, -72, 72);
        if (pitch !== orbit.pitch) velocity.pitch = 0;
        const friction = Math.exp(-dt / 155);
        velocity.yaw *= friction; velocity.pitch *= friction;
        if (Math.abs(velocity.yaw) < .002) velocity.yaw = 0;
        if (Math.abs(velocity.pitch) < .002) velocity.pitch = 0;
      }
    }
    const target = expanded ? orbit : { yaw: 0, pitch: 0, zoom: 1, spread: 0 };
    const easing = motionQuery.matches ? 1 : 1 - Math.exp(-dt / (gesture?.active ? 30 : 105));
    let moving = false;
    for (const key of ['yaw', 'pitch', 'zoom', 'spread']) {
      const delta = target[key] - camera[key];
      const threshold = key === 'yaw' || key === 'pitch' ? .015 : .0005;
      if (Math.abs(delta) < threshold) camera[key] = target[key];
      else { camera[key] += delta * easing; moving = !motionQuery.matches; }
    }
    if (handingOff) {
      extractionProgress += (1 - extractionProgress) * easing;
      if (1 - extractionProgress < .0005) extractionProgress = 1;
    }
    paintCamera();
    if (moving || handingOff || (expanded && (autoOrbit || velocity.yaw || velocity.pitch))) requestCamera();
    else lastFrame = 0;
  }

  function requestCamera() {
    if (decomposing && playing) return;
    if (!cameraFrame && !document.hidden) cameraFrame = requestAnimationFrame(animateCamera);
  }

  function resetCamera() {
    if (decomposing) stopPlayback();
    cancelGesture(); stopOrbit();
    // Use the nearest equivalent yaw so reset never spins through several turns.
    camera.yaw = ((camera.yaw - defaults.yaw + 180) % 360 + 360) % 360 - 180 + defaults.yaw;
    Object.assign(orbit, defaults);
    updateCameraControls(); requestCamera();
    announce('View reset. Default rotation, layer spacing and zoom.');
  }

  function zoomBy(amount) {
    if (!ready || isolated) return;
    if (decomposing) stopPlayback();
    stopOrbit();
    if (view !== 'exploded') setView('exploded');
    orbit.zoom = Math.round(clamp(orbit.zoom + amount, .65, 1.6) * 100) / 100;
    updateCameraControls(); requestCamera();
  }

  function suspendCamera() {
    cancelGesture(); stopOrbit(); cancelAnimationFrame(cameraFrame);
    cameraFrame = 0; lastFrame = 0;
  }

  function updatePlayButton() {
    const label = playing ? 'Pause' : splitRun?.paused ? 'Resume split' : decomposing ? (view === 'composed' ? 'Split original' : 'Replay split') : 'Replay';
    play.innerHTML = `${playing ? pauseIcon : playIcon}<span>${label}</span>`;
    play.setAttribute('aria-label', playing ? 'Pause layer animation' : splitRun?.paused ? 'Resume layer separation' : decomposing ? 'Replay the original image decomposition' : 'Replay the layer composition');
  }

  function stopPlayback(pauseSplit = false) {
    cancelAnimationFrame(playback); playback = 0; playing = false;
    studio.classList.remove('is-splitting');
    if (pauseSplit && splitRun) splitRun.paused = true;
    else splitRun = null;
    planes.forEach(plane => plane.classList.remove('is-arriving'));
    updatePlayButton();
  }

  function updateVisibility() {
    planes.forEach((plane, index) => {
      const visible = isolated ? index === selected : index < visibleCount;
      const arriving = !decomposing && visible && plane.classList.contains('is-hidden') && playing && !motionQuery.matches;
      plane.classList.toggle('is-hidden', !visible);
      plane.classList.toggle('is-selected', index === selected);
      if (!visible) plane.classList.remove('is-arriving');
      else if (arriving) plane.classList.add('is-arriving');
      layerButtons[index]?.classList.toggle('is-visible', visible);
    });
    progress.value = String(visibleCount);
    progress.setAttribute('aria-valuetext', `${visibleCount} of ${scene().layers.length} layers`);
    $('composition-count').textContent = `${visibleCount} / ${scene().layers.length} layers`;
    studio.classList.toggle('is-isolated', isolated);
    isolate.setAttribute('aria-pressed', String(isolated));
    isolate.textContent = isolated ? 'Show composition' : 'Isolate layer';
    $('composition-hint').textContent = isolated
      ? 'An individual layer in its composition position'
      : view === 'input'
        ? 'Original input · drag to reveal its layers'
      : view === 'exploded'
        ? 'Drag to rotate · double-click to reset'
        : decomposing
          ? 'Select a foreground layer to move, rotate or resize'
        : visibleCount === scene().layers.length
          ? 'Drag to open the layers in 3D'
          : 'Drag the slider to add or remove layers';
    updateCameraControls(); requestCamera();
    paintExtraction(); editor?.update(); updateEditLabels();
    if (!playing) updatePlayButton();
  }

  function updateEditLabels() {
    if (!decomposing) return;
    const savedEdits = editor?.isDirty(), dirty = savedEdits && view === 'composed';
    $('composition-provenance').textContent = dirty
      ? 'Edited layout · original RGBA layers preserved · Reset all to restore'
      : savedEdits ? 'Original view · your edited layout is kept in Recomposed'
      : scene().presentationNote || 'Same source image · separate layer prompts · original canvas positions';
    $('composition-original').querySelector('span:last-child').textContent = dirty ? 'Original image' : 'Full image';
    $('composition-original').setAttribute('aria-label', dirty ? `Open ${scene().title} before editing at full resolution` : `Open ${scene().title} ${view === 'input' ? 'input' : 'recomposition'} at full resolution`);
  }

  function inspectionImage(src, priority = 'low') {
    let entry = inspectionImages.get(src);
    if (entry) {
      if (priority === 'high') entry.image.fetchPriority = 'high';
      return entry;
    }
    const image = new Image();
    image.loading = 'eager'; image.decoding = 'async'; image.fetchPriority = priority;
    entry = { image, ready: false, promise: null };
    inspectionImages.set(src, entry);
    entry.promise = imageReady(image, src).then(() => { entry.ready = true; return image; });
    entry.promise.catch(() => { if (inspectionImages.get(src) === entry) inspectionImages.delete(src); });
    return entry;
  }

  function showInspectionImage() {
    const version = ++inspectionVersion;
    const layer = scene().layers[selected];
    const src = channel === 'alpha' ? layer.alpha : layer.native;
    const surface = $('composition-native-surface');
    const entry = inspectionImage(src, 'high');
    const alt = `${layer.name}, ${channel === 'alpha' ? 'displayed alpha channel' : 'generated image layer'}`;
    const show = image => {
      if (version !== inspectionVersion) return;
      const previous = $('composition-native');
      image.alt = alt;
      if (image !== previous) {
        const id = previous.id;
        previous.removeAttribute('id'); image.id = id;
        previous.replaceWith(image);
      }
      surface.setAttribute('aria-busy', 'false');
    };
    if (entry.ready) show(entry.image);
    else {
      surface.setAttribute('aria-busy', 'true');
      entry.promise.then(show).catch(() => {
        if (version !== inspectionVersion) return;
        surface.setAttribute('aria-busy', 'false');
        $('composition-native').removeAttribute('src');
        announce('This layer preview could not be loaded. Select the layer again to retry.');
      });
    }
  }

  function warmInspections(item, version) {
    const order = [...new Set([selected, (selected + 1) % item.layers.length,
      Math.max(0, selected - 1), ...item.layers.map((_, index) => index)])];
    const sources = [...new Set(order.flatMap(index => [item.layers[index].native, item.layers[index].alpha]))];
    let next = 0;
    const work = async () => {
      while (version === loadVersion && next < sources.length) {
        const src = sources[next++];
        try { await inspectionImage(src).promise; } catch { /* A click can retry. */ }
      }
    };
    // Retain decoded previews only for the current case, with bounded loading.
    for (let i = 0; i < 3; i++) work();
  }

  function updateInspection() {
    const layer = scene().layers[selected];
    $('composition-layer-name').textContent = layer.name;
    if (inView || ready || currentLoad) showInspectionImage();
    $('composition-native-surface').dataset.channel = channel;
    const isSolid = layer.origin === 'user_authorized_solid_color';
    const isRGB = layer.origin === 'original_rgb_backbone_output';
    $('composition-layer-origin').textContent = isSolid ? 'Solid-color base' : isRGB ? 'RGB background' : layer.presentationEdited ? 'RGBA · local blur' : decomposing ? 'Native RGBA' : 'Generated RGBA';
    $('composition-model').textContent = layer.model || scene().model;
    if (decomposing) {
      $('composition-layer-original').href = layer.original;
      $('composition-layer-original').setAttribute('aria-label', `Open the displayed full-canvas RGBA for ${layer.name}`);
    }
    $('composition-layer-prompt').textContent = layer.prompt || 'A flat solid-color canvas, added beneath the generated scene elements.';
    all('[data-composition-channel]').forEach(button => {
      const active = button.dataset.compositionChannel === channel;
      button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
    });
    layerButtons.forEach((button, index) => {
      const active = index === selected;
      button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
    });
    planes.forEach((plane, index) => plane.classList.toggle('is-selected', index === selected));
    if (isolated) updateVisibility();
    else editor?.update();
  }

  function inspectLayer(index) {
    selected = index; updateInspection();
    announce(`${scene().layers[index].name}. Layer ${index + 1} of ${scene().layers.length}.`);
  }

  function imageReady(image, src) {
    return new Promise((resolve, reject) => {
      let decoding = false;
      const decoded = () => {
        if (decoding) return;
        decoding = true;
        image.decode ? image.decode().then(resolve, resolve) : resolve();
      };
      image.onload = decoded;
      image.onerror = () => reject(new Error(`Unable to load ${src}`));
      image.src = src;
      if (image.complete && image.naturalWidth) decoded();
    });
  }

  function ensureLoaded() {
    if (ready || currentLoad) return currentLoad;
    const version = loadVersion;
    const item = scene();
    stage.setAttribute('aria-busy', 'true');
    $('composition-loading').textContent = 'Loading the layers…';
    $('composition-loading').hidden = false;
    const images = planes.map((plane, index) => imageReady(plane.querySelector('img'), item.layers[index].src));
    if (decomposing) images.push(imageReady($('composition-source'), item.input));
    showInspectionImage();
    const selectedLayer = item.layers[selected];
    inspectionImage(channel === 'alpha' ? selectedLayer.native : selectedLayer.alpha);
    const promise = Promise.all(images)
      .then(() => {
        if (version !== loadVersion) return;
        ready = true; canvas.classList.add('is-ready');
        play.disabled = false; progress.disabled = false; isolate.disabled = false;
        stage.setAttribute('aria-busy', 'false'); $('composition-loading').hidden = true;
        updateVisibility();
        warmInspections(item, version);
      })
      .catch(() => {
        if (version !== loadVersion) return;
        stage.setAttribute('aria-busy', 'false');
        $('composition-loading').textContent = 'The layers could not be loaded. Select the scene again to retry, or open the full image.';
        announce('The composition layers could not be loaded. The completed image is still available.');
      })
      .finally(() => { if (version === loadVersion) currentLoad = null; });
    currentLoad = promise;
    return promise;
  }

  function selectCase(index, fromUser = false) {
    if (index === current && (ready || currentLoad)) return;
    ++inspectionVersion;
    for (const entry of inspectionImages.values()) if (!entry.ready) entry.image.removeAttribute('src');
    inspectionImages.clear();
    for (const plane of planes) if (!ready) plane.querySelector('img').removeAttribute('src');
    stopPlayback(); cancelGesture(); stopOrbit(); ++loadVersion; currentLoad = null;
    current = index; ready = false; isolated = false;
    extractionProgress = 1;
    Object.assign(orbit, defaults);
    Object.assign(camera, view === 'exploded' ? defaults : { yaw: 0, pitch: 0, zoom: 1, spread: 0 });
    const item = scene();
    visibleCount = item.layers.length;
    selected = Math.max(0, item.layers.findIndex(layer => /_(product|hero)$/.test(layer.logicalId)));
    channel = 'rgba';
    canvas.classList.remove('is-ready');
    studio.style.setProperty('--scene-accent', item.accent);
    $('composition-name').textContent = item.title;
    $('composition-subtitle').textContent = item.subtitle;
    $('composition-model').textContent = item.model;
    $('composition-dimensions').textContent = `${item.width} × ${item.height} · ${item.layers.length} LAYERS`;
    $('composition-case-number').textContent = `${String(index + 1).padStart(2, '0')} / ${String(catalog.length).padStart(2, '0')}`;
    $('composition-original').href = view === 'input' ? item.inputOriginal : item.final;
    $('composition-original').setAttribute('aria-label', `Open ${item.title} ${view === 'input' ? 'input' : 'recomposition'} at full resolution`);
    const brief = $('composition-brief');
    brief.hidden = !item.reference;
    if (item.reference) {
      $('composition-reference').removeAttribute('src');
      if (brief.open) $('composition-reference').src = item.reference;
      $('composition-reference').alt = `${item.title}, Imagegen reference used to plan the scene`;
      $('composition-reference-link').href = item.reference;
      $('composition-intent').textContent = item.intent || item.subtitle;
      $('composition-reference-prompt').textContent = item.referencePrompt || '';
    }
    const fallback = $('composition-fallback');
    fallback.decoding = 'async';
    fallback.src = item.preview || (decomposing ? item.final : item.thumbnail);
    $('composition-fallback').alt = `${item.title}, completed layered composition`;
    if (decomposing) {
      $('composition-source').src = item.input;
      $('composition-source').alt = `${item.title}, original RGBA-Image source`;
      $('composition-source-id').textContent = 'RGBA-Image';
    }
    stage.setAttribute('aria-label', `${item.title}: ${item.layers.length} ${decomposing ? 'extracted RGBA layers' : 'manually arranged layers'}, ${item.model}`);
    progress.max = String(item.layers.length);
    play.disabled = true; progress.disabled = true; isolate.disabled = true;
    $('composition-loading').hidden = true;
    stage.setAttribute('aria-busy', 'false');
    const hasSolid = item.layers.some(layer => layer.origin === 'user_authorized_solid_color');
    const hasRGB = item.layers.some(layer => layer.origin === 'original_rgb_backbone_output');
    $('composition-provenance').textContent = decomposing
      ? item.presentationNote || 'Same source image · separate layer prompts · original canvas positions'
      : hasSolid
      ? 'AlphaAnything RGBA elements + solid-color canvas · manually arranged composition'
      : hasRGB
      ? 'AlphaAnything RGBA elements + original RGB backbone background · manually arranged composition'
      : 'AlphaAnything RGBA elements · manually arranged composition';

    const planeFragment = document.createDocumentFragment();
    const listFragment = document.createDocumentFragment();
    planes = []; layerButtons = [];
    item.layers.forEach((layer, layerIndex) => {
      const plane = document.createElement('div'); plane.className = 'composition-plane';
      if (decomposing && layer.role === 'background') {
        plane.classList.add('has-input-bridge');
        plane.style.setProperty('--input-image', `url(${JSON.stringify(item.input)})`);
      }
      plane.style.setProperty('--depth', String(layerIndex / Math.max(1, item.layers.length - 1) - .5));
      const image = document.createElement('img'); image.alt = ''; image.draggable = false;
      image.decoding = 'async';
      image.width = item.width; image.height = item.height;
      const tag = document.createElement('span'); tag.className = 'composition-plane-label'; tag.setAttribute('aria-hidden', 'true');
      tag.textContent = `${String(layerIndex + 1).padStart(2, '0')} / ${layer.name}`;
      plane.append(image, tag); planeFragment.append(plane); planes.push(plane);
      plane.addEventListener('animationend', () => plane.classList.remove('is-arriving'));

      const button = document.createElement('button'); button.type = 'button'; button.className = 'studio-layer-button';
      button.dataset.layerIndex = String(layerIndex);
      button.setAttribute('aria-label', `Inspect layer ${layerIndex + 1}: ${layer.name}`);
      const number = document.createElement('span'); number.className = 'layer-number'; number.textContent = String(layerIndex + 1).padStart(2, '0');
      const label = document.createElement('span'); label.textContent = layer.name;
      const presence = document.createElement('span'); presence.className = 'layer-presence'; presence.setAttribute('aria-hidden', 'true');
      button.append(number, label, presence); button.addEventListener('click', () => inspectLayer(layerIndex));
      const warmLayer = () => {
        inspectionImage(layer.native, 'high');
        inspectionImage(layer.alpha, 'high');
      };
      button.addEventListener('pointerenter', warmLayer);
      button.addEventListener('focus', warmLayer);
      listFragment.append(button); layerButtons.push(button);
    });
    $('composition-planes').replaceChildren(planeFragment);
    editor?.setScene(item, planes);
    $('composition-layer-list').replaceChildren(listFragment);
    $('composition-layer-list').scrollTop = 0;
    all('.composition-case').forEach(button => {
      const active = Number(button.dataset.compositionCase) === index;
      button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
    });
    updateInspection(); updateVisibility(); fitCanvas();
    if (inView || fromUser) ensureLoaded();
    if (fromUser) announce(`${item.title}, ${item.model}. ${item.layers.length} composition layers.`);
  }

  function setView(next, keepGesture = false) {
    const fromInput = view === 'input';
    stopPlayback();
    if (!keepGesture) cancelGesture();
    stopOrbit();
    if (next !== 'exploded') {
      camera.yaw = ((camera.yaw + 180) % 360 + 360) % 360 - 180;
      orbit.yaw = ((orbit.yaw + 180) % 360 + 360) % 360 - 180;
    }
    view = next; isolated = false; studio.dataset.view = view;
    if (decomposing) {
      if (next === 'input' || motionQuery.matches) extractionProgress = 1;
      else if (fromInput) extractionProgress = 0;
    }
    all('[data-composition-view]').forEach(button => {
      const active = button.dataset.compositionView === view;
      button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
    });
    $('composition-original').href = view === 'input' ? scene().inputOriginal : scene().final;
    $('composition-original').setAttribute('aria-label', `Open ${scene().title} ${view === 'input' ? 'input' : 'recomposition'} at full resolution`);
    updateVisibility();
    announce(view === 'input' ? 'Original dataset image. Drag to reveal the independently extracted layers.' : view === 'exploded' ? 'Exploded view. Drag or use the arrow keys to rotate the layers. Adjust spacing and zoom below.' : decomposing ? 'Recomposed view. Select and drag a foreground layer. Use its corners to resize and top handle to rotate. Background stays fixed.' : 'Composed view: layers aligned into the final image.');
  }

  function replay() {
    if (!ready) return;
    if (playing) { stopPlayback(decomposing); return; }
    stopOrbit();
    if (decomposing) { replayDecomposition(); return; }
    isolated = false;
    if (motionQuery.matches) { visibleCount = scene().layers.length; updateVisibility(); announce('All layers shown. Animation is disabled by your reduced-motion preference.'); return; }
    playing = true; visibleCount = 0; updateVisibility();
    play.innerHTML = `${pauseIcon}<span>Pause</span>`; play.setAttribute('aria-label', 'Pause composition playback');
    const start = performance.now();
    const duration = Math.max(2000, Math.min(4500, scene().layers.length * 115));
    function frame(now) {
      const fraction = Math.min(1, (now - start) / duration);
      const next = Math.min(scene().layers.length, Math.floor(fraction * (scene().layers.length + 1)));
      if (next !== visibleCount) { visibleCount = next; updateVisibility(); }
      if (fraction < 1) playback = requestAnimationFrame(frame);
      else { visibleCount = scene().layers.length; updateVisibility(); stopPlayback(); announce(`${scene().title} complete. ${visibleCount} layers composed.`); }
    }
    playback = requestAnimationFrame(frame);
  }

  function replayDecomposition() {
    if (splitRun?.paused) {
      splitRun.startedAt = performance.now() - splitRun.elapsed;
      splitRun.paused = false; playing = true; studio.classList.add('is-splitting');
      updatePlayButton(); playback = requestAnimationFrame(advanceDecomposition); return;
    }
    const from = view === 'input' ? { yaw: 0, pitch: 0, zoom: 1, spread: 0 } : { ...camera };
    const needsCollapse = Math.abs(from.yaw) + Math.abs(from.pitch) + Math.abs(from.spread) > .1;
    visibleCount = scene().layers.length; isolated = false;
    setView('exploded');
    Object.assign(orbit, defaults);
    if (motionQuery.matches) { extractionProgress = 1; Object.assign(camera, defaults); updateVisibility(); paintCamera(); return; }
    if (!needsCollapse) extractionProgress = 0;
    splitRun = { from, fromProgress: extractionProgress, prepareDuration: needsCollapse ? 450 : 0, startedAt: performance.now(), elapsed: 0, paused: false };
    playing = true; studio.classList.add('is-splitting');
    Object.assign(orbit, from); Object.assign(camera, from); updateVisibility();
    cancelAnimationFrame(cameraFrame); cameraFrame = 0; lastFrame = 0;
    paintCamera(); updatePlayButton();
    playback = requestAnimationFrame(advanceDecomposition);
  }

  function advanceDecomposition(now) {
    if (!splitRun || !playing) return;
    const { from, prepareDuration } = splitRun;
    const elapsed = now - splitRun.startedAt;
    splitRun.elapsed = elapsed;
    const fraction = clamp((elapsed - prepareDuration) / 2200, 0, 1);
    const smooth = value => value * value * (3 - 2 * value);
    if (elapsed < prepareDuration) {
      const ease = smooth(elapsed / prepareDuration);
      Object.assign(orbit, { yaw: from.yaw * (1 - ease), pitch: from.pitch * (1 - ease), spread: from.spread * (1 - ease), zoom: from.zoom + (1 - from.zoom) * ease });
      extractionProgress = splitRun.fromProgress * (1 - ease);
    } else {
      const ease = smooth(fraction);
      Object.assign(orbit, { yaw: defaults.yaw * ease, pitch: defaults.pitch * ease, spread: defaults.spread * ease, zoom: 1 });
      extractionProgress = ease;
    }
    Object.assign(camera, orbit); paintCamera(); updateCameraControls();
    if (fraction < 1) playback = requestAnimationFrame(advanceDecomposition);
    else { stopPlayback(); announce(`${scene().layers.length} original extracted layers separated.`); }
  }

  if (decomposing) {
    // The flat input is used only in Input. During the split, the same decoded
    // image is blended on the background plane using the camera's RAF progress.
    $('composition-world').appendChild($('composition-source'));
    const cameraControls = spread.closest('.studio-camera-controls');
    cameraControls.parentElement.appendChild(cameraControls);
    editor = window.createLayerEditor({ studio, stage, canvas,
      selected: () => selected, select: inspectLayer,
      isComposed: () => view === 'composed',
      isActive: () => ready && view === 'composed' && !isolated && !playing && extractionProgress >= .999,
      isFlat: () => Math.abs(camera.yaw) < .05 && Math.abs(camera.pitch) < .05 && camera.spread < .001,
      onChange: updateEditLabels,
    });
  }

  const cards = document.createDocumentFragment();
  catalog.forEach((item, index) => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'composition-case';
    button.dataset.compositionCase = String(index);
    button.setAttribute('aria-label', `Explore ${item.title}, ${item.layers.length} layers`);
    const image = document.createElement('img'); image.src = item.thumbnail; image.alt = ''; image.loading = 'lazy'; image.width = 52; image.height = 66;
    const label = document.createElement('span'), title = document.createElement('strong'), detail = document.createElement('small');
    title.textContent = item.title; detail.textContent = `${item.layers.length} layers`;
    label.append(title, detail); button.append(image, label);
    button.addEventListener('click', () => selectCase(index, true)); cards.append(button);
  });
  $('composition-cases').append(cards);
  $('composition-brief').addEventListener('toggle', () => {
    const item = scene();
    if ($('composition-brief').open && item.reference) $('composition-reference').src = item.reference;
  });
  all('[data-composition-view]').forEach(button => button.addEventListener('click', () => setView(button.dataset.compositionView)));
  all('[data-composition-channel]').forEach(button => button.addEventListener('click', () => { channel = button.dataset.compositionChannel; updateInspection(); }));
  progress.addEventListener('input', () => { const count = Number(progress.value); stopPlayback(); if (view === 'input') setView('composed'); isolated = false; visibleCount = count; updateVisibility(); });
  play.addEventListener('click', replay);
  isolate.addEventListener('click', () => { stopPlayback(); cancelGesture(); stopOrbit(); if (view === 'input') setView('composed'); isolated = !isolated; updateVisibility(); announce(isolated ? `Isolating ${scene().layers[selected].name}.` : 'Showing the composition.'); });
  spread.addEventListener('input', () => {
    const value = Number(spread.value) / 100;
    if (decomposing) stopPlayback();
    stopOrbit(); orbit.spread = value;
    updateCameraControls(); requestCamera();
  });
  $('composition-zoom-out').addEventListener('click', () => zoomBy(-.1));
  $('composition-zoom-in').addEventListener('click', () => zoomBy(.1));
  $('composition-reset').addEventListener('click', resetCamera);
  orbitButton.addEventListener('click', () => {
    if (!ready || isolated || motionQuery.matches) return;
    if (decomposing) stopPlayback();
    cancelGesture(); velocity.yaw = 0; velocity.pitch = 0;
    autoOrbit = !autoOrbit;
    updateCameraControls(); requestCamera();
  });

  stage.addEventListener('pointerdown', event => {
    if (!ready || isolated || !event.isPrimary || event.button !== 0) return;
    if (editor?.pointerDown(event)) return;
    if (decomposing && view === 'composed') return;
    if (decomposing) stopPlayback();
    stopOrbit(); cancelGesture();
    if (event.pointerType !== 'touch') { event.preventDefault(); stage.focus({ preventScroll: true }); }
    gesture = { id: event.pointerId, type: event.pointerType, startX: event.clientX, startY: event.clientY, x: event.clientX, y: event.clientY, time: performance.now(), active: false };
    stage.setPointerCapture(event.pointerId);
  });
  stage.addEventListener('pointermove', event => {
    if (editor?.pointerMove(event)) return;
    if (!gesture || gesture.id !== event.pointerId) return;
    const totalX = event.clientX - gesture.startX, totalY = event.clientY - gesture.startY;
    if (!gesture.active) {
      if (Math.hypot(totalX, totalY) < 5) return;
      // Keep native vertical scrolling and pinch zoom available on touchscreens.
      if (gesture.type === 'touch' && Math.abs(totalY) >= Math.abs(totalX)) return;
      gesture.active = true; studio.classList.add('is-dragging');
      if (view !== 'exploded') setView('exploded', true);
    }
    const now = performance.now(), dt = Math.max(8, now - gesture.time);
    const sensitivity = 360 / Math.max(560, stage.clientWidth);
    const yaw = (event.clientX - gesture.x) * sensitivity;
    const pitch = (gesture.y - event.clientY) * sensitivity * .75;
    orbit.yaw += yaw; orbit.pitch = clamp(orbit.pitch + pitch, -72, 72);
    velocity.yaw = motionQuery.matches ? 0 : clamp(yaw / dt, -.35, .35);
    velocity.pitch = motionQuery.matches ? 0 : clamp(pitch / dt, -.2, .2);
    gesture.x = event.clientX; gesture.y = event.clientY; gesture.time = now;
    requestCamera();
  });
  function finishGesture(event) {
    if (editor?.pointerUp(event)) return;
    if (!gesture || gesture.id !== event.pointerId) return;
    if (event.type !== 'pointerup' || !gesture.active || performance.now() - gesture.time > 90) {
      velocity.yaw = 0; velocity.pitch = 0;
    }
    cancelGesture(); requestCamera();
  }
  stage.addEventListener('pointerup', finishGesture);
  stage.addEventListener('pointercancel', finishGesture);
  stage.addEventListener('lostpointercapture', finishGesture);
  stage.addEventListener('dblclick', () => { if (ready && !isolated && !(decomposing && view === 'composed')) resetCamera(); });
  stage.addEventListener('keydown', event => {
    if (editor?.keyDown(event)) return;
    if (decomposing && view === 'composed') return;
    if (!ready || isolated || event.target !== stage || event.ctrlKey || event.metaKey || event.altKey) return;
    const step = event.shiftKey ? 25 : 10;
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      if (decomposing) stopPlayback();
      event.preventDefault(); stopOrbit();
      if (view !== 'exploded') setView('exploded');
      if (event.key === 'ArrowLeft') orbit.yaw -= step;
      if (event.key === 'ArrowRight') orbit.yaw += step;
      if (event.key === 'ArrowUp') orbit.pitch = clamp(orbit.pitch + step, -72, 72);
      if (event.key === 'ArrowDown') orbit.pitch = clamp(orbit.pitch - step, -72, 72);
      requestCamera();
    } else if (['+', '=', '-'].includes(event.key)) {
      event.preventDefault(); zoomBy(event.key === '-' ? -.1 : .1);
    } else if (event.key === 'Home' || event.key === '0') {
      event.preventDefault(); resetCamera();
    } else if (event.key === 'Escape') {
      event.preventDefault(); cancelGesture(); stopOrbit(); requestCamera();
    }
  });
  motionQuery.addEventListener('change', () => {
    if (motionQuery.matches) { stopPlayback(); stopOrbit(); }
    updateCameraControls(); requestCamera();
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { stopPlayback(); suspendCamera(); } else requestCamera(); });
  window.addEventListener('blur', suspendCamera);
  window.addEventListener('focus', requestCamera);
  new ResizeObserver(fitCanvas).observe(stage);
  const visibility = new IntersectionObserver(entries => {
    inView = entries.some(entry => entry.isIntersecting);
    if (inView) { ensureLoaded(); requestCamera(); } else { stopPlayback(); suspendCamera(); }
  }, { rootMargin: '300px 0px' });
  selectCase(0); visibility.observe(studio);
  }
  mountLayerStudio('composition', window.ALPHA_COMPOSITIONS);
  mountLayerStudio('decomposition', window.ALPHA_DECOMPOSITIONS);
})();
