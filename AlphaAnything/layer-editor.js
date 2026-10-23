(() => {
  'use strict';
  window.createLayerEditor = context => {
    const { studio, stage, canvas } = context;
    const find = name => document.getElementById(`decomposition-edit-${name}`);
    const panel = find('controls'), rotation = find('rotation'), scale = find('scale');
    const resetLayer = find('reset-layer'), resetAll = find('reset-all');
    const layouts = new Map();
    let scene, planes = [], edits = [], masks = [], gesture = null, showingEditedLayout = false;
    const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
    const normalize = angle => ((angle + 180) % 360 + 360) % 360 - 180;
    const initial = () => ({ x: 0, y: 0, angle: 0, scale: 1 });
    const changed = edit => Math.abs(edit.x) > .01 || Math.abs(edit.y) > .01 || Math.abs(edit.angle) > .01 || Math.abs(edit.scale - 1) > .0001;
    const editable = index => Boolean(scene?.layers[index]?.editable);
    const active = () => context.isActive() && scene;
    const box = index => scene.layers[index].bounds;
    const center = index => { const [left, top, right, bottom] = box(index); return { x: (left + right) / 2, y: (top + bottom) / 2 }; };
    const frame = document.createElement('div');
    frame.className = 'layer-edit-box'; frame.hidden = true;
    frame.innerHTML = '<button type="button" class="layer-edit-label" data-edit-handle="move" aria-label="Move selected layer"></button><span class="layer-edit-stem" aria-hidden="true"></span><button type="button" class="layer-edit-handle layer-edit-rotate" data-edit-handle="rotate" aria-label="Rotate selected layer"><span aria-hidden="true">↻</span></button>' +
      ['nw', 'ne', 'sw', 'se'].map(corner => `<button type="button" class="layer-edit-handle layer-edit-${corner}" data-edit-handle="scale" aria-label="Resize selected layer from ${corner}"></button>`).join('');
    canvas.append(frame);

    function paint(index) {
      const edit = edits[index], origin = center(index), image = planes[index].querySelector('img');
      image.style.transformOrigin = `${origin.x / scene.width * 100}% ${origin.y / scene.height * 100}%`;
      image.style.transform = context.isComposed() && changed(edit) ? `translate(${edit.x / scene.width * 100}%, ${edit.y / scene.height * 100}%) rotate(${edit.angle}deg) scale(${edit.scale})` : '';
      planes[index].dataset.editX = edit.x.toFixed(3); planes[index].dataset.editY = edit.y.toFixed(3);
      planes[index].dataset.editAngle = edit.angle.toFixed(3); planes[index].dataset.editScale = edit.scale.toFixed(4);
    }

    function update() {
      if (!scene) return;
      if (showingEditedLayout !== context.isComposed()) {
        showingEditedLayout = context.isComposed();
        planes.forEach((_, index) => { if (editable(index)) paint(index); });
      }
      panel.hidden = !context.isComposed();
      const index = context.selected(), visible = !planes[index].classList.contains('is-hidden');
      const canEdit = Boolean(active() && editable(index) && visible), edit = edits[index];
      rotation.disabled = scale.disabled = !canEdit;
      rotation.value = String(Math.round(edit.angle)); scale.value = String(Math.round(edit.scale * 100));
      find('rotation-value').textContent = `${Math.round(edit.angle)}°`;
      find('scale-value').textContent = `${Math.round(edit.scale * 100)}%`;
      resetLayer.disabled = !canEdit || !changed(edit);
      resetAll.disabled = !edits.some(changed);
      find('hint').textContent = !editable(index) ? 'Background stays fixed. Select a foreground layer.' : !visible ? 'Reveal this layer with Visible layers to edit it.' : 'Drag the layer or its label. Use corners to resize and the top handle to rotate.';
      frame.hidden = !canEdit || planes[index].classList.contains('is-hidden') || !context.isFlat();
      if (!frame.hidden) {
        const origin = center(index), bounds = box(index);
        frame.style.left = `${(origin.x + edit.x) / scene.width * 100}%`;
        frame.style.top = `${(origin.y + edit.y) / scene.height * 100}%`;
        frame.style.width = `${(bounds[2] - bounds[0]) * edit.scale / scene.width * 100}%`;
        frame.style.height = `${(bounds[3] - bounds[1]) * edit.scale / scene.height * 100}%`;
        frame.style.transform = `translate(-50%, -50%) rotate(${edit.angle}deg) translateZ(3px)`;
        frame.querySelector('.layer-edit-label').textContent = scene.layers[index].name;
      }
      studio.classList.toggle('has-layer-edits', context.isComposed() && edits.some(changed));
    }

    function commit(index) {
      paint(index); update(); context.onChange();
    }

    function setScene(item, elements) {
      cancel(); scene = item; planes = elements;
      if (!layouts.has(item.id)) layouts.set(item.id, item.layers.map(initial));
      edits = layouts.get(item.id);
      masks = item.layers.map(layer => layer.hitMask ? { ...layer.hitMask, bytes: Uint8Array.from(atob(layer.hitMask.data), value => value.charCodeAt(0)) } : null);
      planes.forEach((plane, index) => { if (editable(index)) paint(index); });
      update(); context.onChange();
    }

    function point(event) {
      const rect = canvas.getBoundingClientRect();
      return { x: (event.clientX - rect.left) * scene.width / rect.width, y: (event.clientY - rect.top) * scene.height / rect.height };
    }

    function pick(position) {
      for (let index = planes.length - 1; index >= 0; index--) {
        if (!editable(index) || planes[index].classList.contains('is-hidden')) continue;
        const edit = edits[index], origin = center(index), bounds = box(index), angle = edit.angle * Math.PI / 180;
        const dx = position.x - origin.x - edit.x, dy = position.y - origin.y - edit.y;
        const x = origin.x + (dx * Math.cos(angle) + dy * Math.sin(angle)) / edit.scale;
        const y = origin.y + (-dx * Math.sin(angle) + dy * Math.cos(angle)) / edit.scale;
        if (x < bounds[0] || y < bounds[1] || x >= bounds[2] || y >= bounds[3]) continue;
        const mask = masks[index];
        if (!mask) continue;
        const mx = Math.floor((x - bounds[0]) * mask.width / (bounds[2] - bounds[0]));
        const my = Math.floor((y - bounds[1]) * mask.height / (bounds[3] - bounds[1]));
        if (mask.bytes[my * Math.ceil(mask.width / 8) + (mx >> 3)] & (128 >> (mx & 7))) return index;
      }
      return -1;
    }

    function pointerDown(event) {
      if (!active() || !context.isFlat() || !event.isPrimary || event.button !== 0) return false;
      const handle = event.target.closest('[data-edit-handle]');
      const position = point(event), index = handle ? context.selected() : pick(position);
      if (index < 0 || !editable(index)) return false;
      cancel(); context.select(index);
      const origin = center(index), edit = edits[index];
      const pivot = { x: origin.x + edit.x, y: origin.y + edit.y };
      gesture = { id: event.pointerId, index, type: handle?.dataset.editHandle || 'move', start: position, pivot, edit: { ...edit } };
      event.preventDefault(); stage.focus({ preventScroll: true }); stage.setPointerCapture(event.pointerId);
      studio.classList.add('is-editing-layer');
      return true;
    }

    function pointerMove(event) {
      if (!gesture || event.pointerId !== gesture.id) return false;
      const position = point(event), { index, pivot, start, edit: original, type } = gesture, edit = edits[index];
      if (type === 'move') {
        const origin = center(index);
        edit.x = clamp(original.x + position.x - start.x, -origin.x, scene.width - origin.x);
        edit.y = clamp(original.y + position.y - start.y, -origin.y, scene.height - origin.y);
      } else if (type === 'scale') {
        edit.scale = clamp(original.scale * Math.hypot(position.x - pivot.x, position.y - pivot.y) / Math.max(1, Math.hypot(start.x - pivot.x, start.y - pivot.y)), .25, 2.5);
      } else {
        let angle = original.angle + (Math.atan2(position.y - pivot.y, position.x - pivot.x) - Math.atan2(start.y - pivot.y, start.x - pivot.x)) * 180 / Math.PI;
        if (event.shiftKey) angle = Math.round(angle / 15) * 15;
        edit.angle = normalize(angle);
      }
      event.preventDefault(); commit(index); return true;
    }

    function cancel(restore = false) {
      if (!gesture) return;
      const previous = gesture; gesture = null;
      if (restore) { Object.assign(edits[previous.index], previous.edit); commit(previous.index); }
      studio.classList.remove('is-editing-layer');
      if (stage.hasPointerCapture(previous.id)) stage.releasePointerCapture(previous.id);
    }

    function pointerUp(event) {
      if (!gesture || gesture.id !== event.pointerId) return false;
      cancel(event.type === 'pointercancel'); return true;
    }

    function keyDown(event) {
      if (!active() || !editable(context.selected()) || event.ctrlKey || event.metaKey || event.altKey) return false;
      if (event.target !== stage && !event.target.closest('[data-edit-handle]')) return false;
      const index = context.selected(), edit = edits[index], step = event.shiftKey ? 10 : 1, origin = center(index);
      if (event.key === 'Escape') cancel(true);
      else if (event.key === 'ArrowLeft') edit.x = clamp(edit.x - step, -origin.x, scene.width - origin.x);
      else if (event.key === 'ArrowRight') edit.x = clamp(edit.x + step, -origin.x, scene.width - origin.x);
      else if (event.key === 'ArrowUp') edit.y = clamp(edit.y - step, -origin.y, scene.height - origin.y);
      else if (event.key === 'ArrowDown') edit.y = clamp(edit.y + step, -origin.y, scene.height - origin.y);
      else if (['+', '=', '-'].includes(event.key)) edit.scale = clamp(edit.scale + (event.key === '-' ? -.05 : .05), .25, 2.5);
      else if (['[', ']'].includes(event.key)) edit.angle = normalize(edit.angle + (event.key === '[' ? -5 : 5));
      else if (event.key === '0' || event.key === 'Home') Object.assign(edit, initial());
      else return false;
      event.preventDefault(); commit(index); return true;
    }

    rotation.addEventListener('input', () => { if (active() && editable(context.selected())) { cancel(); edits[context.selected()].angle = Number(rotation.value); commit(context.selected()); } });
    scale.addEventListener('input', () => { if (active() && editable(context.selected())) { cancel(); edits[context.selected()].scale = Number(scale.value) / 100; commit(context.selected()); } });
    resetLayer.addEventListener('click', () => { cancel(); Object.assign(edits[context.selected()], initial()); commit(context.selected()); });
    resetAll.addEventListener('click', () => { cancel(); edits.forEach((edit, index) => { Object.assign(edit, initial()); if (editable(index)) paint(index); }); update(); context.onChange(); });
    return { setScene, update, pointerDown, pointerMove, pointerUp, keyDown, cancel, isDirty: () => edits.some(changed) };
  };
})();
