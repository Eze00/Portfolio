import data from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <ScrollReveal>
        <SectionHeader number="02" label="Skills" />
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <div className="skillGrid">
          {data.skills.map((group) => (
            <div key={group.category} className={styles.cell}>
              <p className={styles.cellTitle}>{group.category}</p>
              <div className={styles.pills}>
                {group.items.map((item) => (
                  <span key={item} className={styles.pill}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
