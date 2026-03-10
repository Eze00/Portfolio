"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import data from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import styles from "./styles/Projects.module.css";

export default function Projects() {
  const [openPreview, setOpenPreview] = useState<string | null>(null);
  const [openCounts, setOpenCounts] = useState<Record<string, number>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  useEffect(() => {
    if (!openPreview) return;
    const video = videoRefs.current[openPreview];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, [openPreview]);

  const togglePreview = (index: string) => {
    if (openPreview === index) {
      const video = videoRefs.current[index];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      setOpenPreview(null);
    } else {
      // Increment count via state so React sees the new key and remounts the img
      setOpenCounts((prev) => ({
        ...prev,
        [index]: (prev[index] ?? 0) + 1,
      }));
      setOpenPreview(index);
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <ScrollReveal>
        <SectionHeader number="03" label="Shipped Features" />
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
                  <Link
                    href={project.learnMore}
                    target="_blank"
                    className={styles.link}
                  >
                    Learn More ↗
                  </Link>
                )}
                {project.preview && (
                  <button
                    className={`${styles.link} ${styles.previewBtn}`}
                    onClick={() => togglePreview(project.index)}
                  >
                    {openPreview === project.index ? "Close ✕" : "Preview ↓"}
                  </button>
                )}
              </div>
            </div>

            <div
              className={`${styles.previewPanel} ${openPreview === project.index ? styles.previewPanelOpen : ""}`}
            >
              <div className={styles.previewInner}>
                {project.preview?.endsWith(".mp4") ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[project.index] = el;
                    }}
                    src={project.preview}
                    loop
                    muted
                    playsInline
                    className={styles.previewMedia}
                  />
                ) : (
                  <img
                    key={`${project.index}-${openCounts[project.index] ?? 0}`}
                    src={`${project.preview}?t=${openCounts[project.index] ?? 0}`}
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
