/* ─────────────────────────────────────────────
   DYNAMIC ISLAND NAV — SCROLL BEHAVIOR
───────────────────────────────────────────── */
(function() {
  const wrapper = document.getElementById('nav-wrapper');
  window.addEventListener('scroll', () => {
    wrapper.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });
})();

/* ─────────────────────────────────────────────
   BEST SELLER CAROUSEL
───────────────────────────────────────────── */
(function () {
  const carousel = document.querySelector('.bs-carousel');
  const wrap     = document.querySelector('.bs-carousel-wrap');
  const prevBtn  = document.getElementById('bsPrev');
  const nextBtn  = document.getElementById('bsNext');

  if (!carousel || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  function getCardWidth() {
    const card = carousel.querySelector('.product-card');
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(carousel).gap) || 20;
    return card.getBoundingClientRect().width + gap;
  }

  function getVisibleCount() {
    return parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--bs-visible') || '4.2'
    );
  }

  function getTotalCards() {
    return carousel.querySelectorAll('.product-card').length;
  }

  function maxIndex() {
    return Math.max(0, getTotalCards() - Math.floor(getVisibleCount()));
  }

  function update() {
    const offset = currentIndex * getCardWidth();
    carousel.style.transform = `translateX(-${offset}px)`;

    // Prev button visibility
    if (currentIndex > 0) {
      prevBtn.classList.add('visible');
    } else {
      prevBtn.classList.remove('visible');
    }

    // Fade gradient at end
    if (currentIndex >= maxIndex()) {
      wrap.classList.add('at-end');
    } else {
      wrap.classList.remove('at-end');
    }

    // Disable next button at end
    nextBtn.disabled = currentIndex >= maxIndex();
    prevBtn.disabled = currentIndex === 0;
  }

  function bsScroll(dir) {
    currentIndex = Math.min(Math.max(currentIndex + dir, 0), maxIndex());
    update();
  }

  // Expose globally so the inline onclick="bsScroll(-1/1)" calls work
  window.bsScroll = bsScroll;

  // Recalculate on resize
  window.addEventListener('resize', () => update());

  // Initial state
  update();
})();

/* ─────────────────────────────────────────────
   DISCOVER PLACEHOLDER SELECTION
───────────────────────────────────────────── */
document.querySelectorAll('.vibe-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        tag.classList.toggle('active');
    });
});


/* ─────────────────────────────────────────────
   REVIEWS CARDS PLACEHOLDER
───────────────────────────────────────────── */
const reviews = [
  {
    quote: '"The right amount of spice."',
    author: 'Angelina R.',
    product: 'ORGANIC\nMOUNTAIN\nHIGH CHAI',
    img: 'path/to/chai.png',
    bg: '#e8836a',
  },
  {
    quote: '"This drink is incredibly refreshing, especially when served over ice. It\'s light, crisp, and instantly cooling, making it perfect for a quick refresh any time of day."',
    author: 'Jacob K.',
    product: 'ORGANIC\nMATCHA\nMINT',
    img: 'path/to/matcha.png',
    bg: '#8dbe44',
  },
  {
    quote: '"One sip and you can feel the difference—clean energy, rich flavor, and all the good stuff your body loves. Literally liquid GOLD."',
    author: 'Harrison G.',
    product: 'TWO ROOTS\nGOLDEN\nLATTE MIX',
    img: 'path/to/golden.png',
    bg: '#f2c040',
  },
  {
    quote: '"Soo tasty and energizing."',
    author: 'Gracie M.',
    product: 'ORGANIC\nTROPICAL\nGREEN TEA',
    img: 'path/to/green.png',
    bg: '#9dc44a',
  },
  {
    quote: '"The perfect start to my day."',
    author: 'Jorge F.',
    product: 'JASMINE\nPETAL',
    img: 'path/to/jasmine.png',
    bg: '#c4aee0',
  },
];

const grid = document.getElementById('teasGrid');

reviews.forEach(r => {
  const productLines = r.product.split('\n').join('<br>');

  grid.innerHTML += `
    <div class="review-card" style="background: ${r.bg};">
      <div class="card-body">
        <p class="card-quote">${r.quote}</p>
        <p class="card-author">${r.author}</p>
      </div>
      <div class="card-footer" style="background: ${r.bg};">
        <img class="card-footer-img" src="${r.img}" alt="${r.product}" />
        <div class="card-product-name">${productLines}</div>
        <button class="shop-btn">Shop</button>
      </div>
    </div>
  `;
});

/* ─────────────────────────────────────────────
   LATTES 
───────────────────────────────────────────── */
(function() {
  const section = document.getElementById('our-lattes');
  const track = document.getElementById('latteTrack');
  const slides = track.querySelectorAll('.latte-slide');
  let current = 0;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    section.setAttribute('data-slide', current);
  }

  section.querySelector('.carousel-prev').addEventListener('click', () => goTo(current - 1));
  section.querySelector('.carousel-next').addEventListener('click', () => goTo(current + 1));

  goTo(0);
})();

/* ─────────────────────────────────────────────
   JOURNAL CAROUSEL
───────────────────────────────────────────── */
(function () {
  const carousel = document.querySelector('.journal-carousel');
  const wrap     = document.querySelector('.journal-carousel-wrap');
  const prevBtn  = document.getElementById('jPrev');
  const nextBtn  = document.getElementById('jNext');

  if (!carousel || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  function getCardWidth() {
    const card = carousel.querySelector('.journal-card');
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(carousel).gap) || 20;
    return card.getBoundingClientRect().width + gap;
  }

  function getVisibleCount() {
    return parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--bs-visible') || '4.2'
    );
  }

  function getTotalCards() {
    return carousel.querySelectorAll('.journal-card').length;
  }

  function maxIndex() {
    return Math.max(0, getTotalCards() - Math.floor(getVisibleCount()));
  }

  function update() {
    const offset = currentIndex * getCardWidth();
    carousel.style.transform = `translateX(-${offset}px)`;

    if (currentIndex > 0) {
      prevBtn.classList.add('visible');
    } else {
      prevBtn.classList.remove('visible');
    }

    if (currentIndex >= maxIndex()) {
      wrap.classList.add('at-end');
    } else {
      wrap.classList.remove('at-end');
    }

    nextBtn.disabled = currentIndex >= maxIndex();
    prevBtn.disabled = currentIndex === 0;
  }

  function jScroll(dir) {
    currentIndex = Math.min(Math.max(currentIndex + dir, 0), maxIndex());
    update();
  }

  window.jScroll = jScroll;

  window.addEventListener('resize', () => update());

  update();
})();

// Cart state
let cartItems = [];

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.classList.add('cart-open');
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.classList.remove('cart-open');
}

function updateShippingBar() {
  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const bar = document.getElementById('shippingBar');
  const remaining = Math.max(0, 75 - total).toFixed(2);
  bar.textContent = total >= 75
    ? 'You have free shipping!'
    : `YOU ARE $${remaining} AWAY FROM FREE SHIPPING!`;
}

function renderCart() {
  const empty = document.getElementById('cartEmpty');
  const list = document.getElementById('cartItemsList');
  const badge = document.querySelector('.nav-cart-badge');

  updateShippingBar();

  if (badge) {
    badge.textContent = cartItems.reduce((s, i) => s + i.qty, 0);
  }

  if (!cartItems.length) {
    empty.style.display = 'block';
    list.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  list.style.display = 'flex';
  list.innerHTML = cartItems.map((item, idx) => `
    <div style="display:flex;gap:12px;align-items:flex-start">
      <div style="width:72px;height:72px;border-radius:8px;background:${item.bg};flex-shrink:0"></div>
      <div>
        <p style="font-weight:600;font-size:14px;margin:0 0 4px">${item.name}</p>
        <p style="font-size:13px;color:#555;margin:0">$${(item.price * item.qty).toFixed(2)}</p>
        <div style="display:flex;align-items:center;gap:8px;margin-top:6px">
          <button onclick="changeQty(${idx},-1)" style="width:24px;height:24px;border:1px solid #ccc;border-radius:4px;cursor:pointer">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${idx},1)" style="width:24px;height:24px;border:1px solid #ccc;border-radius:4px;cursor:pointer">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function changeQty(idx, delta) {
  cartItems[idx].qty += delta;
  if (cartItems[idx].qty <= 0) cartItems.splice(idx, 1);
  renderCart();
}

function addToCart(name, price = 11.95, bg = '#b5d98a') {
  const existing = cartItems.find(i => i.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cartItems.push({ name, price, qty: 1, bg });
  }
  renderCart();
  openCart();
}

// Attach listeners after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const cartBtn = document.querySelector('[aria-label="Cart"]');
  const closeBtn = document.getElementById('cartClose');
  const overlay = document.getElementById('cartOverlay');
  const giftCheck = document.getElementById('giftCheck');  // ← add
  const giftNote = document.getElementById('giftNote');    // ← add

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', closeCart);

  // ← add this block
  if (giftCheck && giftNote) {
    giftCheck.addEventListener('change', () => {
      giftNote.classList.toggle('visible', giftCheck.checked);
      if (!giftCheck.checked) giftNote.value = '';
    });
  }
});

/* ═══════════════════════════════════════════════
   ONLOAD ANIMATIONS — Two Leaves and a Bud
   Add <script src="js/animations.js"></script>
   just before </body> (AFTER script.js)
═══════════════════════════════════════════════ */
 
(function () {
  /* ── Selectors that are EXCLUDED from word-split ── */
  const EXCLUDE_WORD_SPLIT = [
    '.section-title',
    '.product-card *',
    '.journal-card *',
    '.latte-card *',
    '.review-card *',
    '.nav-link',
    '.nav-icon-btn',
    '.announcement-bar',
    '.footer-grid-wrap *',
  ];
 
  /* Elements that should get a simple fade-up (buttons, cards, social) */
  const FADE_UP_SELECTORS = [
    'button.btn-shop',
    '.origin-btn',
    '.more-product-button',
    '.more-journal-button',
    '.partner-btn',
    '.latte-btn',
    '.about-btn',
    '.cart-checkout-btn',
    '.footer-newsletter-form button',
    '.footer-newsletter-form input',
  ];
 
  /* ── Utility: is element excluded from word-split? ── */
  function isExcluded(el) {
    return EXCLUDE_WORD_SPLIT.some(sel => {
      try { return el.closest(sel.split(' ')[0]) !== null || el.matches(sel); }
      catch { return false; }
    });
  }
 
  /* ── Utility: build IntersectionObserver that fires once ── */
  function makeObserver(callback, options = {}) {
    return new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, ...options });
  }
 
  /* ══════════════════════════════════════════
     WORD-BY-WORD SPLIT HELPER
     Wraps each word in a <span class="word">
     preserving surrounding HTML structure
  ══════════════════════════════════════════ */
  function splitIntoWordSpans(el, baseDelay = 0) {
    /* Only walk direct text nodes to avoid mangling child elements */
    function walkNode(node, counter) {
      if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        words.forEach(part => {
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
          } else if (part.length) {
            const span = document.createElement('span');
            span.className = 'word';
            span.textContent = part;
            span.style.animationDelay = `${baseDelay + counter.val * 55}ms`;
            counter.val++;
            frag.appendChild(span);
          }
        });
        node.replaceWith(frag);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        /* Don't descend into inline elements that should stay intact */
        const tag = node.tagName.toLowerCase();
        if (['br', 'img', 'svg', 'button', 'input'].includes(tag)) return;
        Array.from(node.childNodes).forEach(child => walkNode(child, counter));
      }
    }
    const counter = { val: 0 };
    Array.from(el.childNodes).forEach(child => walkNode(child, counter));
    return counter.val; /* total words added */
  }
 
  /* ══════════════════════════════════════════
     TARGETS for word-by-word animation
  ══════════════════════════════════════════ */
  const WORD_ANIM_SELECTORS = [
    /* Hero text — fires immediately (already visible) */
    /* skipped: hero text has its own CSS animation in styles.css */
 
    /* Motto */
    '#motto .context-text h2',
 
    /* Section narrative h2s */
    '#discover .context-text h2',
    '#reviews .context-text h2',
    '#journal .context-text h2',
 
    /* Origin */
    '.origin-center-text h1',
    '.origin-text p',
 
    /* Partners */
    '.partners-h2',
    '.partners-sub',
 
    /* About card */
    '.about-card h2',
    '.about-card p',
 
    /* Footer newsletter */
    '.footer-newsletter-heading',
    '.footer-newsletter-desc',
 
    /* Product info (outside carousel cards — product name/price/desc
       but NOT inside carousel tracks since those already get fade-up) */
    /* Skipped: product card text is inside .product-card which is excluded */
 
    /* Latte content */
    '.latte-card-content .latte-name',
    '.latte-card-content .latte-desc',
 
    /* Generic catch: any standalone <h2>, <h3> not inside excluded zones */
  ];
 
  /* ══════════════════════════════════════════
     BOOT
  ══════════════════════════════════════════ */
  function init() {
    /* ── 1. Section titles: fade-down on scroll ── */
    const titleObs = makeObserver(el => {
      el.setAttribute('data-anim', 'fade-down');
    });
    document.querySelectorAll('.section-title').forEach(el => {
      /* Reset any opacity so the CSS animation can fire */
      el.style.opacity = '0';
      titleObs.observe(el);
    });
 
    /* ── 2. Buttons: fade-up on scroll ── */
    const btnObs = makeObserver((el, delay) => {
      el.setAttribute('data-anim', 'fade-up');
    });
    FADE_UP_SELECTORS.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.style.opacity = '0';
        el.style.animationDelay = `${i * 60}ms`;
        btnObs.observe(el);
      });
    });
 
    /* ── 3. Product cards (best-sellers carousel): fade-up on scroll ── */
    const cardObs = makeObserver(el => {}, { threshold: 0.05 });
    /* We observe the carousel wrapper then stagger-animate all cards */
    const bsWrap = document.querySelector('.bs-carousel-wrap');
    if (bsWrap) {
      const bsCards = bsWrap.querySelectorAll('.product-card');
      bsCards.forEach(c => { c.style.opacity = '0'; });
      const bsWrapObs = makeObserver(() => {
        bsCards.forEach((card, i) => {
          card.setAttribute('data-anim', 'fade-up');
          card.style.animationDelay = `${90 + i * 80}ms`;
        });
      }, { threshold: 0.05 });
      bsWrapObs.observe(bsWrap);
    }
 
    /* ── 4. Journal cards: fade-up on scroll ── */
    const jWrap = document.querySelector('.journal-carousel-wrap');
    if (jWrap) {
      const jCards = jWrap.querySelectorAll('.journal-card');
      jCards.forEach(c => { c.style.opacity = '0'; });
      const jWrapObs = makeObserver(() => {
        jCards.forEach((card, i) => {
          card.setAttribute('data-anim', 'fade-up');
          card.style.animationDelay = `${80 + i * 80}ms`;
        });
      }, { threshold: 0.05 });
      jWrapObs.observe(jWrap);
    }
 
    /* ── 5. Social links: fade-up on scroll, staggered ── */
    const socialBtns = document.querySelectorAll('.footer-social-btn');
    if (socialBtns.length) {
      socialBtns.forEach(btn => { btn.style.opacity = '0'; });
      const socialObs = makeObserver(container => {
        document.querySelectorAll('.footer-social-btn').forEach((btn, i) => {
          btn.setAttribute('data-anim', 'fade-up');
          btn.style.animationDelay = `${i * 80}ms`;
        });
      }, { threshold: 0.3 });
      socialObs.observe(socialBtns[0].closest('.footer-social') || socialBtns[0]);
    }
 
    /* ── 6. Word-by-word animations: scroll-triggered ── */
    const wordObs = makeObserver(el => {
      /* Re-split now that it's about to be visible */
      el.style.opacity = '1'; /* container itself stays visible */
      splitIntoWordSpans(el, 0);
    }, { threshold: 0.2 });
 
    WORD_ANIM_SELECTORS.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (isExcluded(el)) return;
        /* Hide at container level until observed */
        el.style.opacity = '0';
        el.style.overflow = 'visible';
        wordObs.observe(el);
      });
    });
 
    /* ── Extra: any loose <p>, <a> outside excluded zones, in main sections ── */
    const LOOSE_SELECTORS = [
      '#discover p',
      '#reviews .context-text p',
      '#our-origin p',
      '.partners-content p',
      '.about-card p',
    ];
    LOOSE_SELECTORS.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (isExcluded(el)) return;
        el.style.opacity = '0';
        wordObs.observe(el);
      });
    });
  }
 
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ─────────────────────────────────────────────
   MOBILE — Show hamburger on small screens
───────────────────────────────────────────── */
(function() {
  const btn = document.getElementById('mobile-menu-btn');
  if (!btn) return;
 
  function syncHamburgerVisibility() {
    btn.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
  }
 
  syncHamburgerVisibility();
  window.addEventListener('resize', syncHamburgerVisibility);
})();
 
/* ─────────────────────────────────────────────
   MOBILE MENU DRAWER
───────────────────────────────────────────── */
(function() {
  const openBtn   = document.getElementById('mobile-menu-btn');
  const closeBtn  = document.getElementById('mobile-menu-close');
  const overlay   = document.getElementById('mobile-menu-overlay');
  const drawer    = document.getElementById('mobile-menu-drawer');
 
  if (!openBtn || !drawer) return;
 
  function openMenu() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
 
  function closeMenu() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
 
  openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
})();
 
/* ─────────────────────────────────────────────
   SWIPE — Best Sellers Carousel (mobile touch)
───────────────────────────────────────────── */
(function() {
  const carousel = document.querySelector('.bs-carousel');
  if (!carousel) return;
 
  let startX = 0, startScrollLeft = 0, isDragging = false;
 
  carousel.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });
 
  carousel.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const dx = startX - e.touches[0].clientX;
    const cardWidth = (() => {
      const card = carousel.querySelector('.product-card');
      if (!card) return 0;
      const gap = parseFloat(getComputedStyle(carousel).gap) || 20;
      return card.getBoundingClientRect().width + gap;
    })();
    // Accumulate drag into index
  }, { passive: true });
 
  carousel.addEventListener('touchend', e => {
    if (!isDragging) return;
    isDragging = false;
    const dx = startX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) {
      window.bsScroll(dx > 0 ? 1 : -1);
    }
  }, { passive: true });
})();
 
/* ─────────────────────────────────────────────
   SWIPE — Reviews Grid (mobile native scroll)
   Already uses overflow-x:auto — no extra JS needed.
   Just ensure snap is set via CSS.
───────────────────────────────────────────── */
 
/* ─────────────────────────────────────────────
   SWIPE — Journal Carousel (mobile touch)
───────────────────────────────────────────── */
(function() {
  const carousel = document.querySelector('.journal-carousel');
  if (!carousel) return;
 
  let startX = 0, isDragging = false;
 
  carousel.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });
 
  carousel.addEventListener('touchend', e => {
    if (!isDragging) return;
    isDragging = false;
    const dx = startX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) {
      window.jScroll(dx > 0 ? 1 : -1);
    }
  }, { passive: true });
})();

/* ─────────────────────────────────────────────
   FOOTER ACCORDION — mobile only
───────────────────────────────────────────── */
(function() {
  function initFooterAccordion() {
    if (window.innerWidth > 768) return;
    document.querySelectorAll('.footer-col-heading').forEach(heading => {
      // Avoid double-binding on resize
      if (heading.dataset.accordionBound) return;
      heading.dataset.accordionBound = 'true';
      heading.addEventListener('click', () => {
        const col = heading.closest('.footer-col');
        const isOpen = col.classList.contains('open');
        // Close all
        document.querySelectorAll('.footer-col').forEach(c => c.classList.remove('open'));
        // Toggle clicked
        if (!isOpen) col.classList.add('open');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooterAccordion);
  } else {
    initFooterAccordion();
  }

  // Re-run on resize in case user rotates device
  window.addEventListener('resize', initFooterAccordion);
})();