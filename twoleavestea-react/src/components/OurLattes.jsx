import { useState } from "react";
import { LATTES } from "../data/content";
import styles from "./OurLattes.module.css";

export default function OurLattes() {
  const [current, setCurrent] = useState(0);

  const goTo = (index) =>
    setCurrent((index + LATTES.length) % LATTES.length);

  const slide = LATTES[current];

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: slide.sectionBg }}
    >
      <div className={styles.header}>
        <span
          className={`section-title ${styles.title}`}
          style={{ backgroundColor: slide.badgeBg }}
        >
          Our Lattes
        </span>
        <div className={styles.text}>
          <h2>Barista blends for every mood</h2>
          <p className={styles.sub}>(No training required)</p>
        </div>
      </div>

      <div className={styles.carousel}>
        <button
          className={styles.arrow}
          onClick={() => goTo(current - 1)}
          aria-label="Previous"
        >
          <svg viewBox="0 0 14 14"><path d="M9 1 3 7l6 6" /></svg>
        </button>

        <div className={styles.trackWrapper}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {LATTES.map((latte, i) => (
              <div key={i} className={styles.slide}>
                <div className={styles.card} style={{ backgroundColor: latte.cardBg }}>
                  <div className={styles.cardImage}>
                    <img src={`/assets/latte_${i}.png`} alt={latte.imgAlt} />
                  </div>
                  <div className={styles.cardContent}>
                    <span
                      className={`section-title ${styles.badge}`}
                      style={{ backgroundColor: latte.badgeBg }}
                    >
                      {latte.badge}
                    </span>
                    <h3
                      className={styles.name}
                      style={{ color: latte.textColor }}
                    >
                      {latte.name.split("\n").map((line, j) => (
                        <span key={j}>{line}<br /></span>
                      ))}
                    </h3>
                    <p
                      className={styles.desc}
                      style={{ color: latte.textColor }}
                    >
                      {latte.description}
                    </p>
                    <a href="#" className={styles.btn}>Shop Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.arrow}
          onClick={() => goTo(current + 1)}
          aria-label="Next"
        >
          <svg viewBox="0 0 14 14"><path d="M5 1l6 6-6 6" /></svg>
        </button>
      </div>
    </section>
  );
}
