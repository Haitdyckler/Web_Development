import styles from "./MobileMenu.module.css";

const MENU_SECTIONS = [
  { label: "Shop", links: ["Whole Leaf Tea Sachets", "Pure Matcha", "Tea Lattes", "Iced Tea"] },
  { label: "Collections", links: ["Matcha", "Chai", "Organic Tea", "Gifts & Samplers"] },
  { label: "Learn", links: ["Our Story", "Our Spirit", "For Cafes & Partners"] },
  { label: "More", links: ["Reviews", "Tea Journal", "My Account", "Cafe & Wholesale Partners"] },
];

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
        onClick={onClose}
      />
      <div
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        aria-label="Mobile navigation"
      >
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
          ×
        </button>
        {MENU_SECTIONS.map((section) => (
          <div key={section.label}>
            <span className={styles.label}>{section.label}</span>
            {section.links.map((link) => (
              <a key={link} href="#" className={styles.link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
