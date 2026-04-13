import styles from './Nav.module.css';
 
const links = ['About', 'Our Brands', 'This Month', 'Submit Products'];
 
export default function Nav() {
  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <a key={link} href="#" className={styles.link}>
          {link}
        </a>
      ))}
    </nav>
  );
}
 