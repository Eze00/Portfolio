import data from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import styles from "./styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <ScrollReveal>
        <SectionHeader number="01" label="About" />
      </ScrollReveal>

      <div className={styles.grid}>
        <ScrollReveal>
          <div className={styles.text}>
            {data.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className={styles.card}>
            {data.facts.map((f, i) => (
              <div key={i} className={styles.row}>
                <span className={styles.rowKey}>{f.key}</span>
                <span
                  className={
                    f.highlight ? styles.rowValHighlight : styles.rowVal
                  }
                >
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
