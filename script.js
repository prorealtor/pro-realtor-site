const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});
