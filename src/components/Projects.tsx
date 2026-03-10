import Link from "next/link";
import data from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import styles from "./styles/Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <ScrollReveal>
        <SectionHeader number="03" label="Shipped Projects" />
      </ScrollReveal>

      <div className={styles.list}>
        {data.shippedProjects.map((project, index) => (
          <ScrollReveal key={project.index} delay={index * 60}>
            <div className={styles.item}>
              <span className={styles.index}>{project.index}</span>

              <div>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.links}>
                {project.learnMore && (
                  <Link href={project.learnMore} className={styles.link}>
                    Learn More ↗
                  </Link>
                )}
                {project.preview && (
                  <Link href={project.preview} className={styles.link}>
                    Preview ↗
                  </Link>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
