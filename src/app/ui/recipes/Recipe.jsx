// import { RecipesContext } from "@/app/lib/recipes-context";
// import { useContext } from "react";
import Hub from "@/app/ui/Hub";
import RecipeHeader from "@/app/ui/recipes/RecipeHeader";
import styles from "@/app/ui/recipes/Recipe.module.css";
import RecipeBody from "@/app/ui/recipes/RecipeBody";

const records = [{ recipe_id: "recipe0" }];
const recipes = [
  {
    id: "recipe0",
    name: "Chicken Lo Mein",
    description: "best chicken lo mein in town",
    ingredients: ["chicken", "lo", "mein"],
    directions: [
      "prepare the lo",
      "stir the mein",
      "cook the chicken",
      "a very very really really long long step of the process which requires many lines of text to explain this is so annoying",
    ],
  },
  {
    id: "recipe1",
    name: "Majadra",
    description: "",
    ingredients: [],
    directions: [],
  },
];
export default function Recipe({ id }) {
  // const RecipesCtx = useContext(RecipesContext);
  // const recipes = RecipesCtx.recipes;

  const recipe = recipes.find((recipe) => recipe.id === id);
  if (!recipe) return <h1>Recipe Not Found!</h1>;

  const record = records.filter((record) => record.recipe_id === id);
  const cooked_count = record.length;

  return (
    <article className={styles.recipe}>
      <RecipeHeader {...recipe} count={cooked_count} />
      <RecipeBody {...recipe} />
      <Hub recipe={recipe} />
    </article>
  );
}
