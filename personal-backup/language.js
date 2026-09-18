(() => {
  const buttons = document.querySelectorAll('[data-language]');
  function select(language) {
    document.documentElement.lang = language;
    for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.language === language));
  }
  for (const button of buttons) button.addEventListener('click', () => select(button.dataset.language));
  select((navigator.language || '').toLowerCase().startsWith('ko') ? 'ko' : 'en');
})();
