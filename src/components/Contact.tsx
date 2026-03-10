import Link from "next/link";
import data from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import styles from "./styles/Contact.module.css";
import socialIcons from "@/lib/socialIcons";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <ScrollReveal>
        <SectionHeader number="05" label="Contact" />
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <div className={styles.box}>
          <div>
            <h2 className={styles.heading}>Let's get in touch!</h2>
            <p className={styles.note}>
              Open to remote, hybrid or in-person full-time roles. I typically
              respond within 24 hours.
            </p>
          </div>

          <div>
            <Link href={`mailto:${data.email}`} className={styles.email}>
              {data.email}
            </Link>
            <div className={styles.socials}>
              {data.socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <span className={styles.socialIcon}>
                    {socialIcons[social.label]}
                  </span>
                </Link>
              ))}
              <Link
                href={`mailto:${data.email}`}
                className={styles.socialLink}
                aria-label="Mail"
              >
                <span className={styles.socialIcon}>{socialIcons["Mail"]}</span>
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
