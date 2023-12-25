import Link from "next/link";

export default function ControlBar() {
  return (
    <div id="control-bar">
      <input className="search-bar" placeholder="Search Recipe..." />
      <Link href="recipes/new">
        <button>+</button>
      </Link>
    </div>
  );
}
