import styles from "./CafePartners.module.css";

export default function CafePartners() {
  return (
    <section className={styles.section} id="cafe-wholesale-partners">
      <div className={styles.inner}>
        <div className={styles.image}>
          <img src="/assets/Our_Cafe_Wholesale_Partners.png" alt="Barista holding a matcha latte" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.h2}>Our Cafe &amp; Wholesale Partners</h2>
          <p className={styles.sub}>
            From local cafés to national chains, our teas power thousands of baristas every day.
          </p>
          <a href="#" className={styles.btn}>Learn More</a>
        </div>
      </div>
    </section>
  );
}
