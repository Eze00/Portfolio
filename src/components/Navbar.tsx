"use client";
import { useState, useEffect } from "react";
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

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <Link href="#" className={styles.logo} onClick={close}>
          {data.name}
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <ul className={styles.navLinks}>
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={styles.navLink}>
                  {l.label}
                </Link>
              </li>
            ))}
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
          {navLinks.map((l, i) => (
            <li
              key={l.label}
              style={{
                transitionDelay: open ? `${i * 55}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <Link
                href={l.href}
                onClick={close}
                className={styles.overlayLink}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.socialSection}>
          <span className={styles.socialLabel}>Find me on</span>
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
            <Link href={`mailto:${data.email}`} className={styles.socialLink}>
              Mail
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
