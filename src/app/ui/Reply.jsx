import styles from "@/app/ui/Reply.module.css";
import Image from "next/image";

export default function Reply({ user, text }) {
  return (
    <div className={styles.control}>
      <Image
        className={`${styles["user-image"]} user-image`}
        src={user.picture}
        alt=""
      />
      <div className={styles.reply}>
        <p className={styles.replier}>{user.first_name}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
