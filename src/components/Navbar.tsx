"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import data from "@/lib/data";
import styles from "./styles/Navbar.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Shipped Features", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const NAV_HEIGHT = 56;
const OFFSET = NAV_HEIGHT + 32;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isScrollingRef = useRef(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    if (isScrollingRef.current) return;

    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

    const atBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
    if (atBottom) {
      setActiveSection(sectionIds[sectionIds.length - 1]);
      return;
    }

    const triggerY = window.scrollY + OFFSET + 10;
    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= triggerY) {
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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    isScrollingRef.current = true;
    setActiveSection(id);

    const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);

    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      setActiveSection(id);
    }, 1200);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    isScrollingRef.current = true;
    setActiveSection("");
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <a href="#" className={styles.logo} onClick={handleLogoClick}>
          {data.name}
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <ul className={styles.navLinks}>
            {navLinks.map((l) => {
              const sectionId = l.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                  >
                    {l.label}
                    {isActive && <span className={styles.activeDot} />}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
            onClick={() => setOpen((v) => !v)}
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
                <a
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className={`${styles.overlayLink} ${isActive ? styles.overlayLinkActive : ""}`}
                >
                  {l.label}
                </a>
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
