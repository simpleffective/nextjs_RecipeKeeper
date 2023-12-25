import styles from "@/app/ui/recipes/Recipe.module.css";
import Image from "next/image";

export default function RecipeHeader({ image, name, count, description }) {
  const displayCount = count !== undefined && count > 0;
  return (
    <div className={styles.header}>
      <div className={styles.imageWrap}>
        <Image className={styles.image} src={image} alt="" />
      </div>
      <div className={styles.summary}>
        <h1 className={styles.name}>{name}</h1>
      </div>
      <div className={styles.info}>
        {displayCount && (
          <a href="#hub" className={styles.cooked}>
            cooked {count} time{count > 1 && "s"}
          </a>
        )}
      </div>
      <div className={styles.description}>
        <span>{description}</span>
      </div>
    </div>
  );
}
