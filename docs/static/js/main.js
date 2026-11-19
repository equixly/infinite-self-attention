// Mobile menu and the BibTeX copy button.
const burger = document.getElementById('burger'), menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

const copy = document.getElementById('copy');
copy.addEventListener('click', async () => {
  await navigator.clipboard.writeText(document.getElementById('bibtex').textContent);
  copy.textContent = 'Copied';
  setTimeout(() => { copy.textContent = 'Copy'; }, 1600);
});
