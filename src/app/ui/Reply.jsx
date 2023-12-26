import styles from "@/app/ui/Reply.module.css";
import Image from "next/image";
import { fetchRecipes } from "../lib/data";
export default async function Reply({ replier, replier_image, reply }) {
  const a = await fetchRecipes();
  return (
    <div className={styles.control}>
      <Image
        className={`${styles["user-image"]} user-image`}
        src={replier_image}
        alt=""
        width={100}
        height={100}
      />
      <div className={styles.reply}>
        <p className={styles.replier}>{replier}</p>
        <p className={styles.reply}>{reply}</p>
      </div>
    </div>
  );
}
