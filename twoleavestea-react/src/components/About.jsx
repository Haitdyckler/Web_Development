import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.bgImg}>
        <img src="/assets/Two_Leaves_Tea_banner.png" alt="organic turmeric tea" />
      </div>
      <div className={styles.card}>
        <h2>Great Tea. In Good Company.</h2>
        <div className={styles.cardBottom}>
          <p>Discover the people, places, and purpose behind every blend.</p>
          <a href="#" className={styles.btn}>About us</a>
        </div>
      </div>
    </section>
  );
}
