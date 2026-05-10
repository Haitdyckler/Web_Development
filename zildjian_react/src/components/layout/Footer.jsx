// src/components/layout/Footer.jsx
const ABOUT_LINKS = [
  "The Avedis Zildjian Company", "The Zildjian Brand Journey", "Career Opportunities",
  "Zildjian Newsroom", "Dealer and Distributor Locator", "400th Anniversary Concert",
  "Young Drummer of the Year",
];
const SUPPORT_LINKS = [
  "Contact Us", "FAQs", "Warranty", "Shipping and Returns", "Return Authorization",
  "Cymbal Product Registration", "E-Kit Support", "E-Kit Software Downloads",
];

export default function Footer() {
  return (
    <footer className="zd-footer">
      <div className="zd-footer-top">

        {/* About */}
        <div className="zd-footer-col">
          <h3>About</h3>
          {ABOUT_LINKS.map(l => <a key={l} href="#">{l}</a>)}
        </div>

        {/* Support */}
        <div className="zd-footer-col">
          <h3>Support</h3>
          {SUPPORT_LINKS.map(l => <a key={l} href="#">{l}</a>)}
        </div>

        {/* Social + logos */}
        <div className="zd-footer-col">
          <h3>Follow Us</h3>
          <div className="zd-social-links">
            <a href="#" className="zd-social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" /></svg>
            </a>
            <a href="#" className="zd-social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" fill="black" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="black" />
              </svg>
            </a>
            <a href="#" className="zd-social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
            </a>
            <a href="#" className="zd-social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon fill="black" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
              </svg>
            </a>
          </div>

          <div style={{ marginTop: 24 }}>
            <h3>Avedis Zildjian Co.</h3>
            <div className="zd-footer-logos">
              <img src="assets/vicfirth-logo-2x_1.png" alt="Vic Firth" />
              <img src="assets/zildjian_logo.png" alt="Zildjian" />
              <img src="assets/Balter-Mallet.png" alt="Balter" />
            </div>
          </div>
        </div>

      </div>

      <div className="zd-footer-bottom">
        <span>© 2026 All Rights Reserved. Avedis Zildjian Co.</span>
        <div className="zd-footer-links">
          <a href="#">Terms of Use</a><span className="zd-footer-sep">|</span>
          <a href="#">Privacy Policy</a><span className="zd-footer-sep">|</span>
          <a href="#">Do Not Sell Or Share My Info</a>
        </div>
      </div>
    </footer>
  );
}
