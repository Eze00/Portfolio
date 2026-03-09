import Link from "next/link";
import data from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <ScrollReveal>
        <SectionHeader number="03" label="Projects" />
      </ScrollReveal>

      <div className={styles.list}>
        {data.shippedProjects.map((project, i) => (
          <ScrollReveal key={project.index} delay={i * 60}>
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
                {project.link && (
                  <Link href={project.link} className={styles.link}>
                    Link ↗
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} className={styles.link}>
                    GitHub ↗
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
