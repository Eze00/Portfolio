"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import data from "@/lib/data";
import styles from "./styles/Navbar.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Shipped Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const updateActiveSection = useCallback(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const scrollY = window.scrollY + 120;

    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <Link href="#" className={styles.logo} onClick={close}>
          {data.name}
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <ul className={styles.navLinks}>
            {navLinks.map((l) => {
              const sectionId = l.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                  >
                    {l.label}
                    {isActive && <span className={styles.activeDot} />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
            onClick={() => setOpen((toggle) => !toggle)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}>
        <ul className={styles.overlayLinks}>
          {navLinks.map((l, i) => {
            const sectionId = l.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li
                key={l.label}
                style={{
                  transitionDelay: open ? `${i * 55}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "0.3s",
                  transitionTimingFunction: "ease",
                }}
              >
                <Link
                  href={l.href}
                  onClick={close}
                  className={`${styles.overlayLink} ${isActive ? styles.overlayLinkActive : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.socialSection}>
          <span className={styles.socialLabel}>Check out my</span>
          <div className={styles.socialLinks}>
            {data.socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
