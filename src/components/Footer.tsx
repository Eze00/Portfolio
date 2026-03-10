import Link from "next/link";
import data from "@/lib/data";
import styles from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>
        © {new Date().getFullYear()} {data.name}
      </span>
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
      </div>
    </footer>
  );
}
