import Link from "next/link";

export default function RoundImageButton({ className, href, src, width }) {
  const styles = {
    backgroundImage: `url{${src}})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "215%",
    backgroundPosition: "center",
    width: `${width}px`,
    height: `${width}px`,
    cursor: "pointer",
    border: "none",
    borderRadius: "50%",
  };
  return (
    <Link href={href} className={className}>
      <button style={styles} />
    </Link>
  );
}
