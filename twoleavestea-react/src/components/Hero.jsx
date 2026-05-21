import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.h1}>
          A cup that fits<br />the moment.
        </h1>
        <p className={styles.body}>
          From compostable whole leaf tea sachets and iced tea to tea lattes
          and matcha, we've got something for everyone.
        </p>
        <a href="#" className={styles.btn}>Shop Now</a>
      </div>
    </section>
  );
}
