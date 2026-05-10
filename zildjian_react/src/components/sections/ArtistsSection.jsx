// src/components/sections/ArtistsSection.jsx
import { useState, useRef } from "react";
import { ARTISTS } from "../../data/index.js";
import { ArrowLeft, ArrowRight } from "../icons/Arrows.jsx";

const VISIBLE = 3;

export default function ArtistsSection() {
  const [index, setIndex]  = useState(0);
  const carouselRef        = useRef(null);

  function applyTransform(idx) {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const cards = carousel.querySelectorAll(".zd-artist-card");
    if (!cards.length) return;
    const cardW = cards[0].getBoundingClientRect().width;
    carousel.style.transform = `translateX(-${idx * (cardW + 16)}px)`;
  }

  const scroll = (dir) => {
    const next = Math.max(0, Math.min(index + dir, ARTISTS.length - VISIBLE));
    setIndex(next);
    applyTransform(next);
  };

  return (
    <section className="zd-artists-section">
      <div className="zd-artists-inner">

        {/* Desktop image block */}
        <div className="zd-artists-bg">
          <img src="assets/Artist-Block-Image.png" alt="" className="zd-artist-img-back" />
          <img src="assets/artist_2.png"            alt="" className="zd-artist-img-front" />
        </div>

        {/* Content */}
        <div className="zd-artists-content">
          {/* Mobile floating image */}
          <img src="assets/artist_2.png" alt="" className="zd-artist-img-front-mobile" />

          <div className="zd-artists-header">
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,3vw,52px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1, marginTop: 8 }}>
                Explore<br />Our Artists
              </h2>
              <div className="zd-artists-subtitle">Explore Sound Through Our Family Of Artists</div>
            </div>
            <button className="zd-btn-artists zd-artists-btn-desktop">Browse All Artists</button>
          </div>

          <div className="zd-artists-grid-wrap">
            <button className={`zd-artist-prev${index > 0 ? " visible" : ""}`} onClick={() => scroll(-1)} aria-label="Previous">
              <ArrowLeft />
            </button>

            <div className="zd-artists-grid" ref={carouselRef}>
              {ARTISTS.map(artist => (
                <div key={artist.name} className="zd-artist-card">
                  <div style={{ width: "100%", aspectRatio: 1, background: "linear-gradient(135deg,#1a1a1a,#2a2a2a)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.5, stroke: "var(--gold)", strokeWidth: 1.5 }}>
                      <circle cx="12" cy="8" r="4" />
                      <path d="M20 21a8 8 0 1 0-16 0" />
                    </svg>
                  </div>
                  <div className="zd-artist-name">{artist.name}</div>
                  <div className="zd-artist-band">{artist.band}</div>
                </div>
              ))}
            </div>

            <div className="zd-artist-slider-nav">
              <button
                className="zd-artist-next zd-slider-btn"
                onClick={() => scroll(1)}
                disabled={index >= ARTISTS.length - VISIBLE}
                aria-label="Next"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="zd-artists-btn-mobile-wrap">
            <button className="zd-btn-artists zd-artists-btn-mobile">Browse All Artists</button>
          </div>
        </div>

      </div>
    </section>
  );
}
