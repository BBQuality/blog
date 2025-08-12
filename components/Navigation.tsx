import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex gap-4">
      <Link href="/">Головна</Link>
      <Link href="/about">Про мене</Link>
    </nav>
  );
}
