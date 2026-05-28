// =============================================
// HEADER SCROLL STATE (transparent → white)
// =============================================
(function() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function updateHeader() {
    // Hero starts right after announcement bar (44px) + header (64px)
    // We consider "scrolled" once the page has scrolled past the hero top
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader(); // run on load
})();

// =============================================
// STACK CARD ZOOM + SCALE ON SCROLL
// Mimics their vertical slider parallax
// =============================================
(function() {
  const cards = document.querySelectorAll('.stack-card');
  const headerH = 108; // announcement + nav

  function onScroll() {
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const cardH = card.offsetHeight;

      // How far this card has scrolled past the sticky point
      const scrolledPast = headerH - rect.top;

      if (scrolledPast < 0) return; // card not yet reached sticky top

      // Normalize: 0 when just stuck, 1 when next card has fully taken over
      const progress = Math.max(0, Math.min(1, scrolledPast / cardH));

      if (i < cards.length - 1) {
        // Scale down as the next card scrolls over
        const scale = 1 - (progress * 0.04);
        const opacity = 1 - (progress * 0.35);
        card.querySelector('.stack-card__inner').style.transform = `scale(${scale})`;
        card.querySelector('.stack-card__inner').style.opacity = opacity;
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// =============================================
// SCROLL REVEAL
// =============================================
(function() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => observer.observe(el));
})();
// =============================================
// MOBILE NAV DRAWER
// =============================================
(function() {
  const btn     = document.getElementById('mobileMenuBtn');
  const drawer  = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const toggle  = document.getElementById('shopToggle');
  const submenu = document.getElementById('shopSubmenu');
  const header  = document.querySelector('.site-header');

  function open() {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    header.classList.add('drawer-open');
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;
  }

  function shut() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
    header.classList.remove('drawer-open');
    btn.innerHTML = `<span></span><span></span><span></span>`;
  }

  if (btn) btn.addEventListener('click', () => {
    drawer.classList.contains('open') ? shut() : open();
  });
  if (overlay) overlay.addEventListener('click', shut);
  if (toggle)  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    submenu.classList.toggle('open');
  });
})();

// =============================================
// ANNOUNCEMENT BAR ROTATOR (mobile only)
// =============================================
(function() {
  const items = document.querySelectorAll('.announcement-bar__item');
  if (items.length < 2) return;

  let current = 0;

  // Desktop: all items visible as static row (CSS handles this via no media query)
  // Mobile:  only .active item shown, rotate every 3.2s
  function syncDisplay() {
    const isMobile = window.innerWidth <= 768;
    items.forEach((item, i) => {
      if (isMobile) {
        // restore absolute positioning for rotation (CSS already sets this in @media)
        item.classList.toggle('active', i === current);
      } else {
        // all visible on desktop
        item.classList.add('active');
      }
    });
  }

  setInterval(() => {
    if (window.innerWidth > 768) return;
    items[current].classList.remove('active');
    current = (current + 1) % items.length;
    items[current].classList.add('active');
  }, 3200);

  window.addEventListener('resize', syncDisplay);
  syncDisplay();
})();

// =============================================
// DRAWER PRODUCT SLIDER ARROWS
// =============================================
(function() {
  const track = document.getElementById('drawerProductTrack');
  const prev  = document.getElementById('drawerPrev');
  const next  = document.getElementById('drawerNext');
  if (!track || !prev || !next) return;

  const scrollAmt = 172;

  next.addEventListener('click', () => track.scrollBy({ left: scrollAmt, behavior: 'smooth' }));
  prev.addEventListener('click', () => track.scrollBy({ left: -scrollAmt, behavior: 'smooth' }));
})();