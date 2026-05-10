// src/components/layout/MobileMenu.jsx
import { useState } from "react";
import { NAV_ITEMS } from "../../data/index.js";

export default function MobileMenu({ open, onClose }) {
  const [openSubs, setOpenSubs] = useState({});
  const toggleSub = (label) => setOpenSubs(s => ({ ...s, [label]: !s[label] }));

  return (
    <>
      <div className={`zd-mobile-overlay${open ? " open" : ""}`} onClick={onClose} />

      <div className={`zd-mobile-menu${open ? " open" : ""}`}>
        <div className="zd-mobile-menu-header">
          <svg viewBox="0 0 200 50" width="120" height="30">
            <text x="0" y="38" fontFamily="Barlow Condensed, sans-serif" fontSize="38" fontWeight="900" fill="white">ZILDJIAN</text>
          </svg>
          <button className="zd-mobile-menu-close" onClick={onClose}>✕</button>
        </div>

        <ul>
          {NAV_ITEMS.map(item => (
            <li key={item.label} className="zd-mobile-nav-item">
              {item.subs ? (
                <>
                  <button className="zd-mobile-nav-link" onClick={() => toggleSub(item.label)}>
                    <span>{item.label}</span>
                    <svg viewBox="0 0 10 10">
                      <path d="M1 3.5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </button>
                  <div className={`zd-mobile-sub${openSubs[item.label] ? " open" : ""}`}>
                    {item.subs.map(sub => <a key={sub} href="#">{sub}</a>)}
                  </div>
                </>
              ) : (
                <button className="zd-mobile-nav-link" style={{ display: "block", textAlign: "left" }}>
                  <span>{item.label}</span>
                </button>
              )}
            </li>
          ))}

          <li className="zd-mobile-nav-item" style={{ padding: "16px 20px" }}>
            <button className="zd-btn" style={{ display: "block", textAlign: "center", width: "100%" }}>
              Log In / Account
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
