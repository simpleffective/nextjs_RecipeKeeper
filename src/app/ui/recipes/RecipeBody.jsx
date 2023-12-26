import styles from "@/app/ui/recipes/Recipe.module.css";
import { deserializePostgresArray } from "@/app/lib/util";

export default function RecipeBody({ ingredients, directions }) {
  return (
    <div className={styles.body}>
      <div>
        <h3>Ingredients:</h3>
        <ul className={styles.ingredients}>
          {deserializePostgresArray(ingredients[0]).map((ingredient, i) => (
            <li key={i}>
              <span>{ingredient}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Directions:</h3>
        <ol className={styles.directions}>
          {deserializePostgresArray(directions[0]).map((directions, i) => (
            <li key={i}>{directions}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
