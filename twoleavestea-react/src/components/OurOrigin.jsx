import { useIntersection } from "../hooks/useIntersection";
import styles from "./OurOrigin.module.css";

export default function OurOrigin() {
  const [ref, inView] = useIntersection({ threshold: 0.1 });

  return (
    <section className={styles.section} id="our-origin">
      <div className={styles.header}>
        <span className={`section-title ${styles.title}`}>Our Origin</span>
      </div>
      <div className={styles.centerText}>
        <h1>BORN IN COLORADO</h1>
      </div>
      <div className={styles.text} ref={ref}>
        <p className={inView ? styles.visible : ""}>
          Our founder Richard, started Two Leaves and a Bud in pursuit of a
          truly great cup. Two decades later, that same care and curiosity
          guide everything we make.
        </p>
      </div>
      <div className={styles.bottom}>
        <a href="#" className={styles.btn}>Our Story</a>
      </div>
    </section>
  );
}
