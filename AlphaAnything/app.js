(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const data = window.ALPHA_DEMOS;
  const paths = {
    github: '<path d="M9 19c-4 1.2-4-2-6-2m12 5v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 18.5 7a4.3 4.3 0 0 0-.1-3.3S17.4 3.4 15 5a11.3 11.3 0 0 0-6 0C6.6 3.4 5.6 3.7 5.6 3.7A4.3 4.3 0 0 0 5.5 7a4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.9 5.7 5.6 6A3 3 0 0 0 9 18.6V22"/>',
    paper: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6M8 13h8M8 17h6"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.5"/><path d="m3 17 6-6 4 4 3-3 5 5"/>',
    workflow: '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h7a2 2 0 0 1 2 2v7M6 9v9h9"/>',
    expand: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M3 3l6 6m12-6-6 6M3 21l6-6m12 6-6-6"/>',
    compare: '<path d="m8 7-5 5 5 5m8-10 5 5-5 5M3 12h5m8 0h5M12 4v16"/>',
    move: '<path d="M12 3v18M3 12h18M9 6l3-3 3 3m-6 12 3 3 3-3M6 9l-3 3 3 3m12-6 3 3-3 3"/>',
    quote: '<path d="M5 5H3v7h6v6H3v-6m12-7h-2v7h6v6h-6v-6"/>',
    'arrow-right': '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    'arrow-left': '<path d="M20 12H4m6-6-6 6 6 6"/>',
    'arrow-up': '<path d="M12 20V4m-6 6 6-6 6 6"/>',
    external: '<path d="M14 3h7v7m0-7L10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ''}</svg>`;
  document.querySelectorAll('[data-icon]').forEach(element => { element.innerHTML = icon(element.dataset.icon); });

  function createWordmark() {
    const wordmark = document.createElement('span');
    wordmark.className = 'wordmark';
    for (const [text, color] of [['Alpha', 'alpha'], ['Any', 'red'], ['th', 'green'], ['ing', 'blue']]) {
      const part = document.createElement('span'); part.className = `wordmark-${color}`; part.textContent = text; wordmark.append(part);
    }
    return wordmark;
  }

  const menuButton = $('menu-toggle');
  function closeMenu() {
    $('nav-links').classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation'); menuButton.innerHTML = icon('menu');
  }
  menuButton.addEventListener('click', () => {
    const open = !($('nav-links').classList.contains('open'));
    $('nav-links').classList.toggle('open', open); menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); menuButton.innerHTML = icon(open ? 'close' : 'menu');
  });
  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && $('nav-links').classList.contains('open')) { closeMenu(); menuButton.focus(); } });
  const navObserver = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => navObserver.observe(section));

  const dialog = $('image-dialog');
  let currentDialog = null, dialogMode = 'rgba', t2Mode = 'rgba';
  const backgrounds = { i2: 'checker', t2: 'checker', dialog: 'checker' };
  let caseLoad = 0;
  function announce(text) { $('demo-status').textContent = text; }
  function setPressed(selector, predicate) {
    document.querySelectorAll(selector).forEach(button => { const active = predicate(button); button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
  }
  function updateBackgroundButtons(group) {
    setPressed(`[data-bg-group="${group}"]`, button => button.dataset.bg === backgrounds[group]);
    document.querySelectorAll(`[data-bg-group="${group}"]`).forEach(button => { button.disabled = (group === 't2' && t2Mode === 'alpha') || (group === 'dialog' && dialogMode === 'alpha'); });
  }
  function updateGallery() {
    if (!data) return;
    setPressed('[data-t2-mode]', button => button.dataset.t2Mode === t2Mode);
    data.textToRGBA.forEach(item => {
      const card = document.querySelector(`[data-result="${item.id}"]`);
      if (!card) return;
      const image = card.querySelector('img');
      if (image.getAttribute('src') !== item[t2Mode]) image.src = item[t2Mode];
      image.alt = `${item.title}, ${t2Mode === 'alpha' ? 'predicted alpha channel' : 'generated RGBA layer'}`;
      card.querySelector('.transparency-surface').dataset.background = t2Mode === 'alpha' ? 'alpha' : backgrounds.t2;
    });
    updateBackgroundButtons('t2');
  }
  document.querySelectorAll('[data-bg-group]').forEach(button => button.addEventListener('click', () => {
    const group = button.dataset.bgGroup; backgrounds[group] = button.dataset.bg;
    updateBackgroundButtons(group);
    if (group === 'i2') $('i2-output-surface').dataset.background = backgrounds.i2;
    else if (group === 't2') updateGallery();
    else updateDialog();
  }));
  document.querySelectorAll('[data-t2-mode]').forEach(button => button.addEventListener('click', () => {
    t2Mode = button.dataset.t2Mode; updateGallery(); announce(`Showing ${t2Mode === 'alpha' ? 'alpha channels' : 'RGBA layers'} for text-to-RGBA results.`);
  }));

  const slider = $('compare-slider');
  slider.addEventListener('input', () => {
    $('comparison').style.setProperty('--split', `${slider.value}%`);
    slider.setAttribute('aria-valuetext', `${slider.value}% input RGB, ${100 - Number(slider.value)}% output RGBA`);
  });
  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image(); image.onload = () => resolve(image); image.onerror = () => reject(new Error('Unable to load ' + src)); image.src = src;
    });
  }
  async function showCase(index) {
    const item = data.imageToRGBA[index], token = ++caseLoad;
    $('comparison').setAttribute('aria-busy', 'true');
    try {
      await Promise.all([item.input, item.rgba, item.alpha].map(loadImage));
      if (token !== caseLoad) return;
      $('i2-name').textContent = item.title; $('i2-detail').textContent = item.detail; $('i2-prompt').textContent = item.prompt;
      $('i2-input').src = item.input; $('i2-input').alt = `Input image for ${item.title.toLowerCase()}`;
      $('i2-output').src = item.rgba; $('i2-output').alt = `${item.title}, extracted RGBA output`;
      $('i2-alpha').src = item.alpha; $('i2-alpha').alt = `${item.title}, predicted alpha from black (transparent) to white (opaque)`;
      setPressed('[data-case]', button => Number(button.dataset.case) === index);
      $('comparison').setAttribute('aria-busy', 'false');
      document.querySelector('.load-error')?.remove();
      announce(`${item.title}. ${item.detail}. Image-to-RGBA example ${index + 1} of ${data.imageToRGBA.length}.`);
    } catch {
      if (token !== caseLoad) return;
      $('comparison').setAttribute('aria-busy', 'false');
      if (!document.querySelector('.load-error')) {
        const error = document.createElement('p'); error.className = 'load-error'; error.setAttribute('role', 'alert');
        error.textContent = 'This example could not be loaded. Select another example or reload the page.';
        $('i2-examples').before(error);
      }
    }
  }
  function makeExamples() {
    for (const [index, item] of data.imageToRGBA.entries()) {
      const button = document.createElement('button'); button.className = 'example-button'; button.dataset.case = index;
      button.setAttribute('aria-pressed', String(index === 0)); button.classList.toggle('active', index === 0); button.setAttribute('aria-label', `Select ${item.title}`);
      const thumb = document.createElement('span'); thumb.className = 'example-thumbnail';
      const image = document.createElement('img'); image.src = item.input; image.alt = ''; image.loading = 'lazy'; image.width = item.width; image.height = item.height;
      const name = document.createElement('strong'); name.textContent = item.title;
      thumb.append(image); button.append(thumb, name); button.addEventListener('click', () => showCase(index)); $('i2-examples').append(button);
    }
    for (const [index, item] of data.textToRGBA.entries()) {
      const card = document.createElement('button'); card.className = 'generation-card'; card.dataset.result = item.id;
      card.setAttribute('aria-label', `Inspect ${item.title}, including its prompt and alpha channel`);
      const visual = document.createElement('span'); visual.className = 'generation-visual transparency-surface'; visual.dataset.background = 'checker';
      const image = document.createElement('img'); image.src = item.rgba; image.alt = `${item.title}, generated RGBA layer`; image.loading = 'lazy'; image.width = item.width; image.height = item.height;
      const expand = document.createElement('span'); expand.className = 'card-expand'; expand.innerHTML = icon('expand');
      visual.append(image, expand);
      const caption = document.createElement('span'); caption.className = 'generation-caption';
      const labels = document.createElement('span'), title = document.createElement('strong'), detail = document.createElement('small'); title.textContent = item.title; detail.textContent = item.detail;
      labels.append(title, detail); caption.append(labels); caption.insertAdjacentHTML('beforeend', icon('arrow-right'));
      card.append(visual, caption); card.addEventListener('click', () => openResult(index)); $('t2-gallery').append(card);
    }
  }

  function updateDialog() {
    if (!currentDialog) return;
    const figureMode = currentDialog.kind === 'figure';
    dialog.classList.toggle('figure-view', figureMode);
    if (figureMode) {
      const isMethod = currentDialog.id === 'method';
      $('dialog-kicker').textContent = isMethod ? 'Method overview' : 'Teaser';
      $('dialog-title').replaceChildren(createWordmark(), ...(isMethod ? [' architecture'] : []));
      $('dialog-image').src = isMethod ? 'assets/method.webp' : 'assets/teaser.webp';
      $('dialog-image').alt = isMethod ? 'Full AlphaAnything method overview' : 'AlphaAnything teaser collage';
      $('original-image').href = $('dialog-image').getAttribute('src');
    } else {
      const item = data.textToRGBA[currentDialog.index];
      $('dialog-kicker').textContent = 'Text-to-RGBA'; $('dialog-title').textContent = item.title;
      $('dialog-image').src = item[dialogMode]; $('dialog-image').alt = `${item.title}, ${dialogMode === 'alpha' ? 'predicted alpha channel' : 'generated RGBA layer'}`;
      $('dialog-surface').dataset.background = dialogMode === 'alpha' ? 'alpha' : backgrounds.dialog;
      $('dialog-prompt').textContent = item.prompt; $('dialog-model').textContent = item.model;
      $('dialog-count').textContent = `${currentDialog.index + 1} / ${data.textToRGBA.length}`;
      $('previous-example').disabled = currentDialog.index === 0; $('next-example').disabled = currentDialog.index === data.textToRGBA.length - 1;
      $('original-image').href = item[dialogMode];
      setPressed('[data-dialog-mode]', button => button.dataset.dialogMode === dialogMode);
      updateBackgroundButtons('dialog');
    }
  }
  function showDialog() {
    updateDialog(); if (!dialog.open) dialog.showModal(); document.body.classList.add('dialog-open');
  }
  function openResult(index) {
    currentDialog = { kind: 'result', index }; dialogMode = t2Mode; backgrounds.dialog = backgrounds.t2; showDialog();
  }
  function stepResult(delta) {
    if (currentDialog?.kind !== 'result') return;
    const next = currentDialog.index + delta;
    if (next < 0 || next >= data.textToRGBA.length) return;
    currentDialog.index = next; updateDialog(); announce(data.textToRGBA[next].title);
  }
  document.querySelectorAll('[data-figure]').forEach(button => button.addEventListener('click', () => { currentDialog = { kind: 'figure', id: button.dataset.figure }; showDialog(); }));
  document.querySelectorAll('[data-dialog-mode]').forEach(button => button.addEventListener('click', () => { dialogMode = button.dataset.dialogMode; updateDialog(); }));
  $('previous-example').addEventListener('click', () => stepResult(-1)); $('next-example').addEventListener('click', () => stepResult(1));
  $('dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); currentDialog = null; });
  dialog.addEventListener('keydown', event => {
    if (currentDialog?.kind !== 'result' || event.target.matches('input')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); stepResult(event.key === 'ArrowRight' ? 1 : -1); }
  });

  if (data?.imageToRGBA?.length && data?.textToRGBA?.length) {
    makeExamples(); showCase(0);
  } else {
    const message = document.createElement('p'); message.className = 'load-error'; message.textContent = 'The example catalog could not be loaded. Please reload the page.';
    $('t2-gallery').before(message);
  }
})();
