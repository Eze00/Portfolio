import data from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import styles from "./styles/Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <ScrollReveal>
        <SectionHeader number="02" label="Experience" />
      </ScrollReveal>

      <div className="timeline">
        {data.experience.map((experience, index) => (
          <ScrollReveal key={index} delay={index * 70} className="tl-item">
            <div className="tl-dot" />
            <p className={styles.date}>{experience.period}</p>
            <h3 className={styles.role}>{experience.role}</h3>
            <p className={styles.company}>
              {experience.company} · {experience.type}
            </p>
            <p className={styles.desc}>{experience.description}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
