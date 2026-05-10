// src/components/sections/BestSellers.jsx
import { useState, useRef, useEffect } from "react";
import { PRODUCTS } from "../../data/index.js";
import ProductIcon from "../icons/ProductIcon.jsx";
import { ArrowLeft, ArrowRight } from "../icons/Arrows.jsx";

export default function BestSellers({ onAddToCart }) {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const wrapRef     = useRef(null);

  function getVisible() {
    const w = window.innerWidth;
    if (w <= 480)  return 1;
    if (w <= 900)  return 2;
    if (w <= 1100) return 3;
    return 4;
  }

  function applyTransform(idx) {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const cards = carousel.querySelectorAll(".zd-product-card");
    if (!cards.length) return;
    const cardW = cards[0].getBoundingClientRect().width;
    carousel.style.transform = `translateX(-${idx * (cardW + 20)}px)`;
    if (wrapRef.current) wrapRef.current.classList.toggle("at-end", idx >= PRODUCTS.length - getVisible());
  }

  const scroll = (dir) => {
    const next = Math.max(0, Math.min(index + dir, PRODUCTS.length - getVisible()));
    setIndex(next);
    applyTransform(next);
  };

  useEffect(() => { applyTransform(index); }, []);
  useEffect(() => {
    const handler = () => { setIndex(0); applyTransform(0); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <section className="zd-best-sellers">
      <div className="zd-bs-header">
        <h2 className="zd-section-title" style={{ marginBottom: 0, textAlign: "left" }}>Best Sellers</h2>
      </div>

      <div className="zd-bs-wrap" ref={wrapRef} style={{ position: "relative" }}>
        <button className={`zd-bs-prev${index > 0 ? " visible" : ""}`} onClick={() => scroll(-1)} aria-label="Previous">
          <ArrowLeft />
        </button>

        <div className="zd-bs-carousel" ref={carouselRef}>
          {PRODUCTS.map(p => (
            <div key={p.id} className="zd-product-card" onClick={() => onAddToCart(p.name)}>
              {p.isNew && <span className="zd-badge-pill">NEW</span>}
              <div className="zd-product-img">
                <div className="zd-product-img-bg" style={{ background: p.bg }}>
                  <ProductIcon type={p.icon} />
                </div>
              </div>
              <div className="zd-product-vendor">{p.vendor}</div>
              <div className="zd-product-name">{p.name}</div>
              <div className="zd-product-stars">
                <span className="zd-stars">{p.stars}</span>
                <span className="zd-review-count">{p.reviews} Reviews</span>
              </div>
            </div>
          ))}
        </div>

        <div className="zd-slider-nav">
          <button
            className="zd-slider-btn"
            onClick={() => scroll(1)}
            disabled={index >= PRODUCTS.length - getVisible()}
            aria-label="Next"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
