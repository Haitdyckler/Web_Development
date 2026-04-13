import brandsData from '../data/brands';
import styles from './Brands.module.css';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Brands() {
  return (
    <section className={styles.brandsSection}>
      <div className={styles.brandsHeading}>
        <h2>Our<br />Brands</h2>
      </div>

      <div className={styles.brandsGrid}>
        {LETTERS.map((letter) => (
          <div key={letter} className={styles.alphaGroup}>
            <div className={styles.alphaLetter}>{letter}</div>
            {(brandsData[letter] || ['Brand Name']).map((name) => (
              <a key={name} href="#" className={styles.brandNameItem}>
                {name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}