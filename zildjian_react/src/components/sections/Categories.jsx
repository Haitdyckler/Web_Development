// src/components/sections/Categories.jsx
import { CATEGORIES } from "../../data/index.js";

export default function Categories() {
  return (
    <section className="zd-categories">
      <h2 className="zd-section-title">Shop By Category</h2>
      <div className="zd-cat-grid">
        {CATEGORIES.map(cat => (
          <div key={cat.label} className="zd-cat-item">
            <div className="zd-cat-img">
              <img src={cat.img} alt={cat.label} />
            </div>
            <div className="zd-cat-label">
              {cat.label}
              <svg viewBox="0 0 16 8" fill="none">
                <path d="M1 4h13M10 1l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
