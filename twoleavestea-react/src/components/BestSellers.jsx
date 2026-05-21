import { useState, useRef, useCallback } from "react";
import { useCart } from "../context/CartContext";
import { useIntersection } from "../hooks/useIntersection";
import { BEST_SELLERS } from "../data/content";
import styles from "./BestSellers.module.css";

const VISIBLE = 4.2;

export default function BestSellers() {
  const [index, setIndex] = useState(0);
  const { addToCart } = useCart();
  const [wrapRef, inView] = useIntersection({ threshold: 0.05 });

  const maxIndex = Math.max(0, BEST_SELLERS.length - Math.floor(VISIBLE));
  const offset = index * (100 / VISIBLE);

  const scroll = useCallback(
    (dir) => setIndex((i) => Math.min(Math.max(i + dir, 0), maxIndex)),
    [maxIndex]
  );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={`section-title ${styles.title}`}>BEST SELLERS</span>
      </div>

      <div className={styles.wrapOuter} ref={wrapRef}>
        {index > 0 && (
          <button className={`slider-btn ${styles.prevBtn}`} onClick={() => scroll(-2)} aria-label="Previous">
            <svg viewBox="0 0 14 14"><path d="M9 1 3 7l6 6" /></svg>
          </button>
        )}

        <div className={`${styles.clip} ${index >= maxIndex ? styles.atEnd : ""}`}>
          <div
            className={styles.carousel}
            style={{ transform: `translateX(-${offset}%)` }}
          >
            {BEST_SELLERS.map((product, i) => (
              <div
                key={product.id}
                className={styles.card}
                style={
                  inView
                    ? { animationDelay: `${90 + i * 80}ms` }
                    : { opacity: 0 }
                }
                data-anim={inView ? "fade-up" : undefined}
              >
                <div className={styles.cardMedia} style={{ background: product.bg }}>
                  <span className={styles.badge}>{product.badge}</span>
                  <div className={styles.stars}><span>★ {product.stars.replace("★ ", "")}</span></div>
                  <button
                    className={styles.addBtn}
                    onClick={() => addToCart(product.name, product.priceNum, product.bg)}
                    aria-label="Add to Cart"
                  >
                    <span>+</span>
                    <p>Add</p>
                  </button>
                </div>
                <div className={styles.info}>
                  <a href="#">
                    <p className={styles.name}>{product.name}</p>
                    <span className={styles.price}>{product.price}</span>
                    <p className={styles.desc}>{product.description}</p>
                  </a>
                </div>
              </div>
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

      <div className={styles.exploreWrap}>
        <a href="#" className={styles.exploreBtn}>Explore All Teas</a>
      </div>
    </section>
  );
}
