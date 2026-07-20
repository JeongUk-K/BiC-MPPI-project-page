function copyBibTeX(button) {
  const targetId = button?.dataset.copyTarget;
  const bibtexElement = targetId ? document.getElementById(targetId) : null;
  const copyText = button?.querySelector('.copy-text');

  if (!bibtexElement || !button || !copyText) return;

  const showCopiedState = () => {
    button.classList.add('copied');
    copyText.textContent = 'Copied!';
    window.setTimeout(() => {
      button.classList.remove('copied');
      copyText.textContent = 'Copy';
    }, 2000);
  };

  const fallbackCopy = () => {
    const textArea = document.createElement('textarea');
    textArea.value = bibtexElement.textContent;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    button.focus();
    showCopiedState();
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(bibtexElement.textContent)
      .then(showCopiedState)
      .catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}

function scrollToTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
}

window.addEventListener('scroll', () => {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (!scrollButton) return;
  scrollButton.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

document.querySelectorAll('.copy-bibtex-btn[data-copy-target]').forEach((button) => {
  button.addEventListener('click', () => copyBibTeX(button));
});
