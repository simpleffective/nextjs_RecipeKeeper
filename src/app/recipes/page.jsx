import RecipeGrid from "@/app/ui/recipes/RecipeGrid";
import ControlBar from "@/app/ui/recipes/ControlBar";

export default function RecipesPage() {
  return (
    <>
      <h1>Recipe Keeper</h1>
      <ControlBar />
      <RecipeGrid />
    </>
  );
}
