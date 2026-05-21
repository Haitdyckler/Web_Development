import { useCart } from "../context/CartContext";
import { useScrolled } from "../hooks/useScrolled";
import styles from "./Nav.module.css";

const ChevronDown = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CartIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export default function Nav({ onMenuOpen }) {
  const scrolled = useScrolled(80);
  const { totalQty, setCartOpen } = useCart();

  return (
    <div className={`${styles.wrapper} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>

        {/* LEFT */}
        <div className={styles.navLeft}>
          <button className={styles.hamburger} onClick={onMenuOpen} aria-label="Open menu">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          </button>

          {/* Shop dropdown */}
          <div className={styles.dropdownWrap}>
            <button className={styles.navLink}>Shop <ChevronDown /></button>
            <div className={`${styles.dropdown} ${styles.shopDropdown}`}>
              <div className={styles.shopCols}>
                <div className={styles.shopCol}>
                  <div className={styles.colHeading}>Tea Varieties</div>
                  <a href="#">Whole Leaf Tea Sachets</a>
                  <a href="#">Pure Matcha</a>
                  <a href="#">Tea Lattes</a>
                  <a href="#">Iced Tea</a>
                </div>
                <div className={styles.shopCol}>
                  <div className={styles.colHeading}>Collections</div>
                  <a href="#">Matcha</a><a href="#">Chai</a>
                  <a href="#">Organic Tea</a><a href="#">Naked Tea Sachets</a>
                  <a href="#">Black Tea</a><a href="#">Green Tea</a>
                  <a href="#">Herbal Tea</a><a href="#">Caffeine-Free</a>
                  <a href="#">Gifts &amp; Samplers</a>
                </div>
                <div className={styles.shopBestsellers}>
                  <div className={styles.colHeading}>Shop Best Sellers</div>
                  <div className={styles.shopProducts}>
                    {[
                      { bg: "#c8e6a0", label: "Ceremonial Matcha - 1 oz Tin" },
                      { bg: "#f5c98a", label: "Nice Chai Tea Latte Mix" },
                      { bg: "#aad4f5", label: "Organic Earl Grey Tea" },
                    ].map((p) => (
                      <a key={p.label} href="#" className={styles.shopProduct}>
                        <div className={styles.shopProductImg} style={{ background: p.bg }} />
                        <span>{p.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.shopFooter}>
                <a href="#" className={styles.shopAllBtn}>Shop All Teas</a>
              </div>
            </div>
          </div>

          {/* Learn dropdown */}
          <div className={styles.dropdownWrap}>
            <button className={styles.navLink}>Learn <ChevronDown /></button>
            <div className={`${styles.dropdown} ${styles.learnDropdown}`}>
              <div className={styles.learnProducts}>
                {[
                  { bg: "#aad4f5", label: "Our Story" },
                  { bg: "#c8e6a0", label: "Our Spirit" },
                  { bg: "#1a2a5e", label: "For Cafes and Partners" },
                ].map((c) => (
                  <a key={c.label} href="#" className={styles.learnCard}>
                    <div className={styles.learnImg} style={{ background: c.bg }} />
                    <span>{c.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <button className={styles.navLink}>Reviews</button>
        </div>

        {/* CENTER: Logo */}
        <a href="#" className={styles.logo}>
          <img src="/assets/two_leaves_logo.png" alt="Two Leaves and a Bud" className="logo_img" />
        </a>

        {/* RIGHT */}
        <div className={styles.navRight}>
          <button className={styles.navLink}>My Account</button>
          <button className={styles.navLink}>Cafe &amp; Wholesale Partners</button>
          <button className={styles.navLink}>Tea Journal</button>
          <div className={styles.divider} />
          <button
            className={styles.cartBtn}
            onClick={() => setCartOpen(true)}
            aria-label="Cart"
          >
            <CartIcon />
            <span className={styles.cartBadge}>{totalQty}</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
