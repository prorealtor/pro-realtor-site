const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

if (navToggle && mainNav) {
  const closeMenu = () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', '메뉴 열기');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
}

const videoOpenBtn = document.getElementById('videoOpenBtn');
const videoModal = document.getElementById('videoModal');
const videoCloseBtn = document.getElementById('videoCloseBtn');
const promoVideo = document.getElementById('promoVideo');

if (videoOpenBtn && videoModal && promoVideo) {
  const openVideo = () => {
    videoModal.classList.add('open');
    promoVideo.play().catch(() => {});
  };
  const closeVideo = () => {
    videoModal.classList.remove('open');
    promoVideo.pause();
  };

  videoOpenBtn.addEventListener('click', openVideo);
  videoCloseBtn.addEventListener('click', closeVideo);
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideo();
  });
}
