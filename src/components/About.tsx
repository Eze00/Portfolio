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
            <img
              src="/portfolio-pic.JPG"
              alt="Ezedine"
              className={styles.image}
            />
            <p>{data.bio}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className={styles.card}>
            {data.facts.map((fact, index) => (
              <div key={index} className={styles.row}>
                <span className={styles.rowKey}>{fact.key}</span>
                <span className={fact.highlight ? styles.rowValHighlight : styles.rowVal}>
                  {fact.highlight ? (
                    <span className={styles.statusRow}>
                      <span className={styles.statusDot} />
                      {fact.value}
                    </span>
                  ) : (
                    fact.value
                  )}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
