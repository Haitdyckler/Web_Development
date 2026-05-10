// src/components/sections/Hero.jsx
import { useState, useEffect, useRef, useCallback } from "react";
import { SLIDES } from "../../data/index.js";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = useCallback((n) => {
    setCurrent(((n % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  // Start / restart auto-advance
  const startAuto = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 5000);
  }, []);

  useEffect(() => { startAuto(); return () => clearInterval(timerRef.current); }, [startAuto]);

  return (
    <section
      className="zd-hero"
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={startAuto}
    >
      <button className="zd-hero-arrow prev" onClick={() => go(current - 1)}>&#8249;</button>

      <div className="zd-hero-slides" style={{ transform: `translateX(-${current * 100}%)` }}>
        {SLIDES.map((slide, i) => (
          <div key={i} className="zd-hero-slide">
            <div style={{ width: "100%", height: "70vh", background: slide.bg, display: "flex", alignItems: "center", justifyContent: slide.align, padding: 60 }}>
              <div style={{ textAlign: slide.textAlign, maxWidth: 500 }}>
                <p style={{ color: "var(--gold)", fontSize: 12, letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>
                  {slide.tag}
                </p>
                <h1 style={{ color: "white", fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,72px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1, marginBottom: 20, whiteSpace: "pre-line" }}>
                  {slide.title}
                </h1>
                <p style={{ color: "rgba(255,255,255,.7)", fontSize: 15, marginBottom: 28 }}>{slide.body}</p>
                <button className={slide.btnClass} style={slide.btnStyle}>{slide.btnLabel}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="zd-hero-arrow next" onClick={() => go(current + 1)}>&#8250;</button>

      <div className="zd-hero-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`zd-hero-dot${i === current ? " active" : ""}`} onClick={() => go(i)} />
        ))}
      </div>
    </section>
  );
}
