// HERO SLIDER
let currentSlide = 0;
const totalSlides = 3;
let autoSlide = setInterval(nextSlide, 5000);

function goToSlide(n) {
currentSlide = n;
document.getElementById('heroSlides').style.transform = `translateX(-${n * 100}%)`;
document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === n));
}
function nextSlide() { goToSlide((currentSlide + 1) % totalSlides); }
function prevSlide() { goToSlide((currentSlide - 1 + totalSlides) % totalSlides); }

// SEARCH
function toggleSearch() {
const bar = document.getElementById('searchBar');
bar.classList.toggle('active');
if (bar.classList.contains('active')) document.getElementById('searchInput').focus();
}

// MOBILE MENU
function openMobileMenu() {
document.getElementById('mobileMenu').classList.add('open');
document.getElementById('mobileOverlay').classList.add('open');
document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
document.getElementById('mobileMenu').classList.remove('open');
document.getElementById('mobileOverlay').classList.remove('open');
document.body.style.overflow = '';
}
function toggleSub(el) {
const sub = el.nextElementSibling;
sub.classList.toggle('open');
}

// CART
let cart = [];
function openCart() {
document.getElementById('cartDrawer').classList.add('open');
document.getElementById('cartOverlay').classList.add('open');
document.body.style.overflow = 'hidden';
}
function closeCart() {
document.getElementById('cartDrawer').classList.remove('open');
document.getElementById('cartOverlay').classList.remove('open');
document.body.style.overflow = '';
}
function addToCart(name) {
const prices = {
    'K Sweet Crashes': 359.95, 'A Zildjian New Beat HiHats': 194.95,
    'K Paper Thin Crashes': 419.95, 'Zildjian Classic Logo Tee': 30,
    'Z Custom Bundle': 69.99, 'FX Stacks': 194.95,
    'Zildjian Blackout Hat': 33, 'K Projection Ride': 524.95
};
const price = prices[name] || 99.95;
const existing = cart.find(i => i.name === name);
if (existing) existing.qty++;
else cart.push({ name, price, qty: 1 });
renderCart();
showToast('Added to cart!');
}
function renderCart() {
const empty = document.getElementById('cartEmpty');
const items = document.getElementById('cartItems');
const footer = document.getElementById('cartFooter');
if (cart.length === 0) {
    empty.style.display = 'block'; items.style.display = 'none'; footer.style.display = 'none'; return;
}
empty.style.display = 'none'; items.style.display = 'block'; footer.style.display = 'block';
let total = 0;
items.innerHTML = cart.map(item => {
    total += item.price * item.qty;
    return `<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--gray-mid)">
    <div><div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px">${item.name}</div>
    <div style="font-size:13px;color:var(--gray-text);margin-top:2px">$${item.price.toFixed(2)} × ${item.qty}</div></div>
    <div style="display:flex;align-items:center;gap:8px">
        <span style="font-weight:700">$${(item.price * item.qty).toFixed(2)}</span>
        <button onclick="removeFromCart('${item.name}')" style="background:none;border:none;cursor:pointer;color:var(--gray-text);font-size:18px;line-height:1">×</button>
    </div></div>`;
}).join('');
document.getElementById('cartTotal').textContent = '$' + total.toFixed(2);
}
function removeFromCart(name) {
cart = cart.filter(i => i.name !== name);
renderCart();
}
function showToast(msg) {
const t = document.getElementById('toast');
t.textContent = msg; t.classList.add('show');
setTimeout(() => t.classList.remove('show'), 2500);
}

// LOCATION
function openLocation() {
    window.location.href = 'https://your-target-page.com';
  }

// NEWSLETTER
function subscribeNewsletter() {
const email = document.getElementById('emailInput').value;
if (!email || !email.includes('@')) { showToast('Please enter a valid email.'); return; }
showToast('Thanks for joining the Z Club!');
document.getElementById('emailInput').value = '';
}

// BEST SELLERS CAROUSEL
(function(){
  let bsIndex = 0;

  function getBsVisibleCount(){
    const w = window.innerWidth;
    if(w <= 480) return 1;
    if(w <= 900) return 2;
    if(w <= 1100) return 3;
    return 4;
  }

  function getBsTotalCards(){
    return document.querySelectorAll('#bsCarousel .product-card').length;
  }

  function updateBsButtons() {
    const prev = document.getElementById('bsPrev');
    const next = document.getElementById('bsNext');
    const wrap = document.querySelector('.bs-carousel-wrap');
    if (!prev || !next) return;
    const atEnd = bsIndex >= getBsTotalCards() - getBsVisibleCount();
    prev.classList.toggle('visible', bsIndex > 0);
    next.disabled = atEnd;
    if (wrap) wrap.classList.toggle('at-end', atEnd);
  }

  function applyBsTransform(){
    const carousel = document.getElementById('bsCarousel');
    if(!carousel) return;
    const cards = carousel.querySelectorAll('.product-card');
    if(!cards.length) return;
    const gap = 20;
    const cardW = cards[0].getBoundingClientRect().width;
    carousel.style.transform = `translateX(-${bsIndex * (cardW + gap)}px)`;
    updateBsButtons();
  }

  window.bsScroll = function(dir){
    const total = getBsTotalCards();
    const visible = getBsVisibleCount();
    bsIndex = Math.max(0, Math.min(bsIndex + dir, total - visible));
    applyBsTransform();
  };

  window.addEventListener('resize', function(){
    bsIndex = 0;
    applyBsTransform();
  });

  // Init
  document.addEventListener('DOMContentLoaded', function(){
    updateBsButtons();
  });
})();

// Artist CAROUSEL
(function(){
    let artistIndex = 0;
    const visibleCount = 3;

    function getTotalArtists(){
        return document.querySelectorAll('#artistCarousel .artist-card').length;
    }

    function updateArtistButtons(){
        const prev = document.getElementById('artistPrev');
        const next = document.getElementById('artistNext');
        if(!prev || !next) return;
        const atEnd = artistIndex >= getTotalArtists() - visibleCount;
        prev.classList.toggle('visible', artistIndex > 0);
        next.disabled = atEnd;
    }

    function applyArtistTransform(){
        const carousel = document.getElementById('artistCarousel');
        if(!carousel) return;
        const cards = carousel.querySelectorAll('.artist-card');
        if(!cards.length) return;
        const cardW = cards[0].getBoundingClientRect().width;
        carousel.style.transform = `translateX(-${artistIndex * (cardW + 16)}px)`;
        updateArtistButtons();
    }

    window.artistScroll = function(dir){
        const total = getTotalArtists();
        artistIndex = Math.max(0, Math.min(artistIndex + dir, total - visibleCount));
        applyArtistTransform();
    };

    document.addEventListener('DOMContentLoaded', updateArtistButtons);
    // Swipe support for artist carousel
  (function(){
    const el = document.getElementById('artistCarousel');
    if(!el) return;
    let startX = 0;
    el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    el.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if(Math.abs(diff) > 40) artistScroll(diff > 0 ? 1 : -1);
    }, { passive: true });
  })();
})();


// Auto-play hero
document.querySelector('.hero').addEventListener('mouseenter', () => clearInterval(autoSlide));
document.querySelector('.hero').addEventListener('mouseleave', () => { autoSlide = setInterval(nextSlide, 5000); });