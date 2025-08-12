"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-gray-200 dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          Мій Блог
        </Link>
        <Navigation />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
