import { useState } from "react";
import { JOURNAL_CARDS } from "../data/content";
import { useIntersection } from "../hooks/useIntersection";
import styles from "./Journal.module.css";

const VISIBLE = 4.2;

export default function Journal() {
  const [index, setIndex] = useState(0);
  const [wrapRef, inView] = useIntersection({ threshold: 0.05 });

  const maxIndex = Math.max(0, JOURNAL_CARDS.length - Math.floor(VISIBLE));
  const offset = index * (100 / VISIBLE);

  const scroll = (dir) =>
    setIndex((i) => Math.min(Math.max(i + dir, 0), maxIndex));

  return (
    <section className={styles.section} id="journal">
      <div className={styles.header}>
        <span className={`section-title ${styles.title}`}>Journal</span>
        <div className={styles.contextText}>
          <h2>
            A community steeped in <i>curiosity</i>. Explore recipes, culture,
            and everyday tea wisdom.
          </h2>
        </div>
      </div>

      <div className={styles.wrapOuter} ref={wrapRef}>
        {index > 0 && (
          <button
            className={`slider-btn ${styles.prevBtn}`}
            onClick={() => scroll(-2)}
            aria-label="Previous"
          >
            <svg viewBox="0 0 14 14"><path d="M9 1 3 7l6 6" /></svg>
          </button>
        )}

        <div className={`${styles.clip} ${index >= maxIndex ? styles.atEnd : ""}`}>
          <div
            className={styles.carousel}
            style={{ transform: `translateX(-${offset}%)` }}
          >
            {JOURNAL_CARDS.map((card, i) => (
              <a
                key={i}
                href="#"
                className={styles.card}
                style={
                  inView
                    ? { animationDelay: `${80 + i * 80}ms` }
                    : { opacity: 0 }
                }
                data-anim={inView ? "fade-up" : undefined}
              >
                <div className={styles.cardMedia} style={{ background: card.bg }}>
                  <span className={styles.cardBadge}>{card.badge}</span>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardTitle}>{card.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.nextWrap}>
          <button
            className="slider-btn"
            onClick={() => scroll(2)}
            disabled={index >= maxIndex}
            aria-label="Next"
          >
            <svg viewBox="0 0 14 14"><path d="M5 1l6 6-6 6" /></svg>
          </button>
        </div>
      </div>

      <div className={styles.moreWrap}>
        <a href="#" className={styles.moreBtn}>Explore The Tea Journal</a>
      </div>
    </section>
  );
}
