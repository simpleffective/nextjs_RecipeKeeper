import Link from "next/link";
import Card from "./Card";

export default function Grid({ recipes }) {
  return (
    <div id="grid">
      {recipes.map((recipe) => (
        <Link key={recipe.id} href={`recipes/${recipe.id}`}>
          <Card name={recipe.name} />
        </Link>
      ))}
    </div>
  );
}
