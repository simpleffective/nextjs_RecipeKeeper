import RecipeGrid from "@/app/ui/recipes/RecipeGrid";
import ControlBar from "@/app/ui/recipes/ControlBar";
import { mali } from "../ui/fonts";
import { title } from "@/app/ui/header.module.css";

export default function RecipesPage() {
  return (
    <>
      <h1 className={`${title} ${mali.className}`}>Recipe Keeper</h1>
      <ControlBar />
      <RecipeGrid />
    </>
  );
}
