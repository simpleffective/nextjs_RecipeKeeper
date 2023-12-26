// import { RecipesContext } from "@/app/lib/recipes-context";
// import { useContext } from "react";
import Hub from "@/app/ui/Hub";
import RecipeHeader from "@/app/ui/recipes/RecipeHeader";
import styles from "@/app/ui/recipes/Recipe.module.css";
import RecipeBody from "@/app/ui/recipes/RecipeBody";
import { fetchRecipes, fetchRecords, fetchUser } from "@/app/lib/data";

export default async function Recipe({ id }) {
  // const RecipesCtx = useContext(RecipesContext);
  // const recipes = RecipesCtx.recipes;

  const recipes = await fetchRecipes();
  const records_all = await fetchRecords();

  const recipe = recipes.find((recipe) => recipe.recipe_id == id);
  if (!recipe) return <h1>Recipe Not Found!</h1>;

  const records = records_all.filter((record) => record.recipe_id == id);
  const cooked_count = records.length;

  const user = await fetchUser(recipe.user_id);

  return (
    <article className={styles.recipe}>
      <RecipeHeader {...recipe} user={user} count={cooked_count} />
      <RecipeBody {...recipe} />
      <Hub records={records} />
    </article>
  );
}
