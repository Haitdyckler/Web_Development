import { useState } from "react";
import { VIBE_TAGS } from "../data/content";
import styles from "./Discover.module.css";

export default function Discover() {
  const [activeTags, setActiveTags] = useState([]);
  const [query, setQuery] = useState("");

  const toggleTag = (tag) =>
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  return (
    <section className={styles.section} id="discover">
      <div className={styles.header}>
        <span className={`section-title ${styles.title}`}>Discover</span>
        <div className={styles.contextText}>
          <h2>Let's find a cup that fits the <i>moment</i>. What are you searching for?</h2>
        </div>
      </div>

      <div className={styles.searchBlock}>
        <div className={styles.searchWrapper}>
          <input
            className={styles.input}
            type="text"
            placeholder="iced tea"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div>
            <p className={styles.vibeLabel}>Or explore by vibe...</p>
            <div className={styles.vibeTags}>
              {VIBE_TAGS.map((tag) => (
                <button
                  key={tag}
                  className={`${styles.vibeTag} ${activeTags.includes(tag) ? styles.active : ""}`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
