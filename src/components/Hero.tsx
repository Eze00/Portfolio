import Link from "next/link";
import data from "@/lib/data";
import styles from "./styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.greeting}>
        Hi,
      </div>

      <h1 className={styles.name}>{data.name}</h1>
      <p className={styles.title}>{data.title}</p>

      <div className={styles.actions}>
        <Link href="#experience" className={styles.btnPrimary}>Experience</Link>
        <Link href="#projects" className={styles.btnSecondary}>View Projects</Link>
        <Link href="#contact" className={styles.btnSecondary}>Get in Touch</Link>
      </div>

      <div className={styles.stats}>
        {data.stats.map((s) => (
          <div key={s.label}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
