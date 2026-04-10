import { useState, useRef } from 'react';
import styles from './FooterCTA.module.css';

export default function FooterCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section className={styles.footerCta}>
      <div className={styles.footerCtaText}>
        <span className={styles.storeIcon}>
          <img src="/assets/locavore_store.png" alt="The Locavore" style={{ maxWidth: '100px', width: '100%' }} />
        </span>
        <h2>Want to be on our shelves?</h2>
        <p>
          Have questions, want recommendations, or want to tell us about a small
          business you love? Reach out! If you're a business owner featured in our
          directory, reach out with links, images, etc. below.
        </p>
      </div>

      <div className={styles.footerForm}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label>First and Last Name *</label>
            <input type="text" placeholder="Jane Smith" />
          </div>
          <div className={styles.formField}>
            <label>Email *</label>
            <input type="email" placeholder="jane@example.com" />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label>Brand Name *</label>
            <input type="text" placeholder="Your Brand" />
          </div>
          <div className={styles.formField}>
            <label>Location *</label>
            <input type="text" placeholder="City, State" />
          </div>
        </div>

        <div className={styles.formField}>
          <label>Sell Sheet or Product Catalog *</label>
          <div className={styles.uploadWrapper}>
            <button
              className={styles.uploadBtn}
              onClick={() => fileInputRef.current?.click()}
            >
              ↑ Upload a file {fileName && `— ${fileName}`}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className={`${styles.formField} ${styles.messageField}`}>
          <label>Message *</label>
          <textarea rows={4} />
        </div>

        <button
          className={`${styles.submitBtn} ${submitted ? styles.submitted : ''}`}
          onClick={handleSubmit}
        >
          {submitted ? 'Sent ✓' : 'Submit'}
        </button>
      </div>
    </section>
  );
}