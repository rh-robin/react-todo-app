import styles from "./Footer.module.css";

export default function Footer({ completed, total }) {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>
        <span>Completed Task: {completed}</span>
        <span>Total Task: {total}</span>
      </div>
    </div>
  );
}
