"use client";

import { ThemeProvider } from "next-themes";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="flex-1 container mx-auto px-4">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
