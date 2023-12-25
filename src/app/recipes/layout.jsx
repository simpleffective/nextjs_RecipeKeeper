import Nav from "@/app/ui/nav";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}
