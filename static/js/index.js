function copyBibTeX() {
  const bibtexElement = document.getElementById('bibtex-code');
  const button = document.querySelector('.copy-bibtex-btn');
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
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
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
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (!scrollButton) return;
  scrollButton.classList.toggle('visible', window.scrollY > 300);
});
