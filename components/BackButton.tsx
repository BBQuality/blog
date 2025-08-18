"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/posts")}
      className="mb-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
    >
      ← Назад до списку
    </button>
  );
}
