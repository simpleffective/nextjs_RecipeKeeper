import Recipe from "@/app/ui/recipes/Recipe";
import NewRecipe from "@/app/ui/recipes/NewRecipe";

export default function RecipePage({ params }) {
  let page = <Recipe id={params.id} />;
  if (params.id === "new") page = <NewRecipe />;
  return page;
}
