(() => {
  const button = document.getElementById('copy-citation');
  const code = document.getElementById('citation-text');
  const status = document.getElementById('citation-status');
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = 'Copied';
      status.textContent = 'BibTeX copied to clipboard.';
      setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 1800);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = 'Text selected';
      status.textContent = 'Copy is unavailable in this browser. The citation is selected; use your browser’s Copy command.';
    }
  });
})();
