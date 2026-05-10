// src/components/sections/Instagram.jsx
import { IG_PLACEHOLDERS } from "../../data/index.js";

export default function Instagram() {
  return (
    <section className="zd-instagram">
      <h2 className="zd-section-title">
        #PLAY<span className="zd-section-title-gold">ZILDJIAN</span>
      </h2>
      <p className="zd-instagram-sub">
        Tag your pics and videos with @zildjiancompany and #PlayZildjian and show us how you express yourself with Zildjian.
      </p>
      <div className="zd-ig-grid">
        {IG_PLACEHOLDERS.map((p, i) => (
          <div key={i} className="zd-ig-placeholder" style={{ background: p.bg }}>
            <span style={{ color: p.gold ? "var(--gold)" : undefined, opacity: p.gold ? 1 : 0.3, fontSize: 36 }}>
              {p.icon}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
