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

const videoEmbed = document.getElementById('videoEmbed');
const videoPlayBtn = document.getElementById('videoPlayBtn');
const promoVideo = document.getElementById('promoVideo');

if (videoEmbed && videoPlayBtn && promoVideo) {
  const playVideo = () => {
    videoEmbed.classList.add('playing');
    promoVideo.controls = true;
    promoVideo.play().catch(() => {});
  };

  videoPlayBtn.addEventListener('click', playVideo);
  promoVideo.addEventListener('click', () => {
    if (!videoEmbed.classList.contains('playing')) playVideo();
  });
  promoVideo.addEventListener('play', () => {
    videoEmbed.classList.add('playing');
    promoVideo.controls = true;
  });
  promoVideo.addEventListener('ended', () => {
    videoEmbed.classList.remove('playing');
    promoVideo.controls = false;
    promoVideo.currentTime = 0;
  });
}
