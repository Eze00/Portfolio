import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  number: string;
  label: string;
}

export default function SectionHeader({ number, label }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <span className={styles.number}>{number}</span>
      <div className={styles.line} />
      <span className={styles.label}>{label}</span>
    </div>
  );
}
