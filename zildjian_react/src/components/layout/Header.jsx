// src/components/layout/Header.jsx
import { useState } from "react";
import { NAV_ITEMS } from "../../data/index.js";

export default function Header({ onOpenCart, onOpenMenu, cartCount }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="zd-header">
      <div className="zd-header-inner">

        {/* Mobile: hamburger + search (left side) */}
        <div className="zd-header-left-group">
          <button className="zd-mobile-menu-btn" onClick={onOpenMenu} aria-label="Menu">
            <svg viewBox="0 0 18 16">
              <path d="M1 .5h16M1 8h16M1 15.5h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button className="zd-header-icon zd-mobile-search-btn" onClick={() => setSearchOpen(s => !s)} aria-label="Search">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" /></svg>
          </button>
        </div>

        {/* Logo (center on mobile, left on desktop) */}
        <a className="zd-logo" href="#">
          <img src="assets/zildjian_logo.png" alt="Zildjian" />
        </a>

        {/* Desktop nav */}
        <nav className="zd-nav">
          <ul className="zd-nav-list">
            {NAV_ITEMS.map(item => (
              <li key={item.label} style={{ position: "relative" }}>
                <button className="zd-nav-link">{item.label}</button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icon cluster */}
        <div className="zd-header-icons">
          <button className="zd-header-icon zd-desktop-search-btn" onClick={() => setSearchOpen(s => !s)} aria-label="Search">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" /></svg>
          </button>
          <button className="zd-header-icon" aria-label="Location">
            <svg viewBox="0 0 28 28" width="24" height="24">
              <path d="M24 13.25C24 14.131 23.58 15.35 22.75 16.81C21.94 18.24 20.85 19.72 19.72 21.09C18.6 22.44 17.47 23.65 16.62 24.52C16.49 24.66 16.37 24.78 16.25 24.9C16.13 24.78 16.01 24.66 15.88 24.52C15.03 23.65 13.9 22.44 12.78 21.09C11.65 19.72 10.56 18.24 9.75 16.81C8.92 15.35 8.5 14.131 8.5 13.25C8.5 8.97 11.97 5.5 16.25 5.5C20.53 5.5 24 8.97 24 13.25Z" fill="none" stroke="white" strokeWidth="3" />
            </svg>
          </button>
          <button className="zd-header-icon zd-account-btn" aria-label="Account">
            <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </button>
          <button className="zd-header-icon" onClick={onOpenCart} aria-label="Cart" style={{ position: "relative" }}>
            <svg viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span style={{ position: "absolute", top: 2, right: 2, background: "var(--gold)", color: "var(--black)", borderRadius: "50%", width: 16, height: 16, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search bar (desktop) */}
      <div className={`zd-search-bar${searchOpen ? " active" : ""}`}>
        <input type="search" placeholder="Search cymbals, sticks, artists..." autoFocus={searchOpen} />
      </div>
    </header>
  );
}
