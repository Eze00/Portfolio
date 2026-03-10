"use client";
import { useState } from "react";
import Link from "next/link";
import data from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import styles from "./styles/Projects.module.css";

export default function Projects() {
  const [openPreview, setOpenPreview] = useState<string | null>(null);

  const togglePreview = (index: string) => {
    setOpenPreview((prev) => (prev === index ? null : index));
  };

  return (
    <section id="projects" className={styles.projects}>
      <ScrollReveal>
        <SectionHeader number="03" label="Shipped Projects" />
      </ScrollReveal>

      <div className={styles.list}>
        {data.shippedProjects.map((project, index) => (
          <ScrollReveal key={project.index} delay={index * 60}>
            {/* Main project row */}
            <div className={styles.item}>
              <span className={styles.index}>{project.index}</span>

              <div>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className={styles.links}>
                {project.learnMore && (
                  <Link href={project.learnMore} target="_blank" className={styles.link}>
                    Learn More ↗
                  </Link>
                )}
                {project.preview && (
                  <button
                    className={`${styles.link} ${styles.previewBtn} ${openPreview === project.index ? styles.previewBtnActive : ""}`}
                    onClick={() => togglePreview(project.index)}
                  >
                    {openPreview === project.index ? "Close ✕" : "Preview ↓"}
                  </button>
                )}
              </div>
            </div>

            {/* Smooth preview panel */}
            <div
              className={`${styles.previewPanel} ${openPreview === project.index ? styles.previewPanelOpen : ""}`}
            >
              <div className={styles.previewInner}>
                {project.preview?.endsWith(".mp4") ? (
                  <video
                    src={project.preview}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.previewMedia}
                  />
                ) : (
                  <img
                    src={project.preview}
                    alt={`${project.title} preview`}
                    className={styles.previewMedia}
                  />
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
