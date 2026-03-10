import Link from "next/link";
import data from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import styles from "./styles/Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <ScrollReveal>
        <SectionHeader number="05" label="Contact" />
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <div className={styles.box}>
          <div>
            <h2 className={styles.heading}>Let's build something together.</h2>
            <p className={styles.note}>
              Open to full-time roles, freelance projects, and interesting
              conversations. I typically respond within 24 hours.
            </p>
          </div>

          <div>
            <Link href={`mailto:${data.email}`} className={styles.email}>
              {data.email}
            </Link>
            <div className={styles.socials}>
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
      </ScrollReveal>
    </section>
  );
}
