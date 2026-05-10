// src/App.jsx
import { useState, useEffect, useRef } from "react";
import { PRICES } from "./data/index.js";

// Layout
import AnnouncementBar from "./components/layout/AnnouncementBar.jsx";
import Header          from "./components/layout/Header.jsx";
import MobileMenu      from "./components/layout/MobileMenu.jsx";
import Footer          from "./components/layout/Footer.jsx";

// Sections
import Hero            from "./components/sections/Hero.jsx";
import PromoBlocks     from "./components/sections/PromoBlocks.jsx";
import BestSellers     from "./components/sections/BestSellers.jsx";
import Categories      from "./components/sections/Categories.jsx";
import ArtistsSection  from "./components/sections/ArtistsSection.jsx";
import Instagram       from "./components/sections/Instagram.jsx";
import Newsletter      from "./components/sections/Newsletter.jsx";

// UI
import CartDrawer      from "./components/ui/CartDrawer.jsx";
import Toast           from "./components/ui/Toast.jsx";

export default function App() {
  const [cart,     setCart]     = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast,    setToast]    = useState({ msg: "", show: false });
  const toastTimer              = useRef(null);

  // Helpers
  const showToast = (msg) => {
    clearTimeout(toastTimer.current);
    setToast({ msg, show: true });
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, show: false })), 2500);
  };

  const addToCart = (name) => {
    const price = PRICES[name] ?? 99.95;
    setCart(prev => {
      const existing = prev.find(i => i.name === name);
      if (existing) return prev.map(i => i.name === name ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { name, price, qty: 1 }];
    });
    showToast("Added to cart!");
  };

  const removeFromCart = (name) => setCart(prev => prev.filter(i => i.name !== name));

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  // Lock body scroll when any overlay is open
  useEffect(() => {
    document.body.style.overflow = (cartOpen || menuOpen) ? "hidden" : "";
  }, [cartOpen, menuOpen]);

  return (
    <div>
      <AnnouncementBar />
      <Header
        onOpenCart={() => setCartOpen(true)}
        onOpenMenu={() => setMenuOpen(true)}
        cartCount={cartCount}
      />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero />
        <PromoBlocks />
        <BestSellers onAddToCart={addToCart} />
        <Categories />
        <ArtistsSection />
        <Instagram />
        <Newsletter onToast={showToast} />
      </main>

      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onRemove={removeFromCart} />
      <Toast message={toast.msg} show={toast.show} />
    </div>
  );
}
