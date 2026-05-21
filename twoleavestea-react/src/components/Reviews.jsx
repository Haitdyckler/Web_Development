import { REVIEWS } from "../data/content";
import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <section className={styles.section} id="reviews">
      <div className={styles.header}>
        <span className={`section-title ${styles.title}`}>Reviews</span>
        <div className={styles.contextText}>
          <h2>Loved by tea people <i>everywhere</i>. Here's what they're saying.</h2>
        </div>
      </div>

      <div className={styles.grid}>
        {REVIEWS.map((r, i) => (
          <div key={i} className={styles.card} style={{ background: r.bg }}>
            <div className={styles.cardBody}>
              <p className={styles.quote}>{r.quote}</p>
              <p className={styles.author}>{r.author}</p>
            </div>
            <div className={styles.cardFooter} style={{ background: r.bg }}>
              <div className={styles.productName}>
                {r.product.split("\n").map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </div>
              <button className={styles.shopBtn}>Shop</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
