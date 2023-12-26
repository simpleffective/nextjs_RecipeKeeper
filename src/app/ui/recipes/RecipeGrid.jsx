import Link from "next/link";
import Card from "./Card";
import { fetchRecipes } from "@/app/lib/data";

export default async function Grid() {
  const recipes = await fetchRecipes();

  return (
    <div id="grid">
      {recipes.map((recipe) => (
        <Link key={recipe.recipe_id} href={`recipes/${recipe.recipe_id}`}>
          <Card name={recipe.name} />
        </Link>
      ))}
    </div>
  );
}
