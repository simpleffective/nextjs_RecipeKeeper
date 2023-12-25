import styles from "./card.module.css";

export default function card({ name }) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
    </div>
  );
}
