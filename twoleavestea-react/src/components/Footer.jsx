import { useState } from "react";
import styles from "./Footer.module.css";

const FOOTER_COLS = [
  {
    heading: "Tea Varieties",
    links: ["Whole Leaf Tea Sachets", "Pure Matcha", "Tea Lattes", "Iced Tea"],
  },
  {
    heading: "Collections",
    links: ["Matcha", "Chai", "Organic Tea", "Naked Tea Sachets", "Black Tea", "Green Tea", "Herbal Tea", "Caffeine-Free", "Gift & Samplers"],
  },
  {
    heading: "Lattes",
    links: ["Nice Matcha", "Barista Matcha", "Nice Chai", "Barista Chai", "Two Roots Golden Latte"],
  },
  {
    heading: "Learn",
    links: ["Our Story", "Our Spirit", "FAQ", "Reviews"],
  },
  {
    heading: "Tea Journal",
    links: ["All Articles", "Tea 101", "Recipes", "Sustainability"],
  },
  {
    heading: "Support",
    links: ["Contact", "My Account", "Loyal-Tea", "Shipping & Returns", "Privacy Policy", "Terms & Conditions"],
  },
  {
    heading: "Cafe & Wholesale Partners",
    links: ["Cafe & Wholesale Partners", "Wholesale Login", "Product and Media Files", "Displays & Starter Kits"],
  },
];

export default function Footer() {
  const [openCol, setOpenCol] = useState(null);
  const [email, setEmail] = useState("");

  const toggleCol = (i) => setOpenCol(openCol === i ? null : i);

  return (
    <footer className={styles.footer}>
      {/* Newsletter */}
      <div className={styles.newsletter}>
        <div className={styles.newsletterLeft}>
          <h2 className={styles.newsletterHeading}>Steep With Us</h2>
          <p className={styles.newsletterDesc}>
            Get news stories, brewing tips, and special offers straight to your inbox.
          </p>
          <div className={styles.form}>
            <input
              type="email"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="button">Submit</button>
          </div>
        </div>
        <div className={styles.social}>
          {[
            { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
            { label: "Instagram", special: "instagram" },
            { label: "LinkedIn", special: "linkedin" },
          ].map((s) => (
            <a key={s.label} href="#" className={styles.socialBtn} aria-label={s.label}>
              {s.label === "Facebook" && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={s.path} />
                </svg>
              )}
              {s.label === "Instagram" && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              )}
              {s.label === "LinkedIn" && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Link grid */}
      <div className={styles.gridWrap}>
        <div className={styles.grid}>
          {FOOTER_COLS.map((col, i) => (
            <div
              key={i}
              className={`${styles.col} ${openCol === i ? styles.open : ""}`}
            >
              <div
                className={styles.colHeading}
                onClick={() => toggleCol(i)}
              >
                {col.heading}
              </div>
              <div className={styles.colLinks}>
                {col.links.map((link) => (
                  <a key={link} href="#">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <a href="#" className={styles.bottomLogo}>
          <img src="/assets/two_leaves_logo_blue.png" alt="Two Leaves and a Bud" />
        </a>
        <div className={styles.bottomText}>
          <p>© TWO LEAVES AND A BUD 2026</p>
          <p>SITE BY MANUFACTUR</p>
        </div>
      </div>
    </footer>
  );
}
