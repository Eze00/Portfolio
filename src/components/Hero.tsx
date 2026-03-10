"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import data from "@/lib/data";
import styles from "./styles/Hero.module.css";

const titles = data.titles;

const TYPE_SPEED = 60; // ms per character when typing
const DELETE_SPEED = 35; // ms per character when deleting
const PAUSE_AFTER = 1800; // ms to pause after fully typed
const PAUSE_BEFORE = 400; // ms to pause before typing next

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const current = titles[titleIndex];

    if (!isDeleting && displayed === current) {
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, PAUSE_AFTER);
      return;
    }

    if (isDeleting && displayed === "") {
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(false);
        setTitleIndex((i) => (i + 1) % titles.length);
      }, PAUSE_BEFORE);
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplayed((prev) =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
        );
      },
      isDeleting ? DELETE_SPEED : TYPE_SPEED,
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, isPaused, titleIndex]);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.greeting}>Hi! I'm,</div>
      <h1 className={styles.name}>{data.name}</h1>

      <p className={styles.titleWrapper}>
        <span className={styles.titleStatic}>a </span>
        <span className={styles.titleTyped}>
          {displayed}
          <span className={styles.cursor}>|</span>
        </span>
      </p>

      <div className={styles.actions}>
        <Link href="#experience" className={styles.btnPrimary}>
          Experience
        </Link>
        <Link href="#projects" className={styles.btnSecondary}>
          View Projects
        </Link>
        <Link href="#contact" className={styles.btnSecondary}>
          Get in Touch
        </Link>
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
