import Link from "next/link";
import data from "@/lib/data";
import styles from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>
        {data.name} © {new Date().getFullYear()}. {"All Rights Reserved."}
      </span>
      <div className={styles.socials}>
        {data.socials.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            {social.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
