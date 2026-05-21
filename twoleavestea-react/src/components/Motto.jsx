import { useIntersection } from "../hooks/useIntersection";
import styles from "./Motto.module.css";

export default function Motto() {
  const [ref, inView] = useIntersection();

  return (
    <section className={styles.motto} id="motto">
      <div className={styles.grid}>
        <div className={styles.contextText} ref={ref}>
          <h2 className={inView ? styles.visible : ""}>
            A <i>great</i> cup starts with a careful pluck — the top two leaves and a bud.
          </h2>
        </div>
      </div>
    </section>
  );
}
