import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Про мене | Мій сайт",
  description: "Дізнайтеся більше про мене, мою роботу та досвід.",
  keywords: ["Про мене", "портфоліо", "досвід", "розробка"],
};

export default function AboutPage() {
  return (
    <main className="prose lg:prose-xl mx-auto p-4">
      <h1>Про мене</h1>
      <p>
        Привіт! Мене звати Богдан, і я розробник, який любить створювати корисні
        та красиві веб-речі. Працюю з Laravel, React, Three.js та іншими технологіями.
      </p>
      <p>
        Тут можна додати будь-яку інформацію про себе, свій досвід, навички чи
        навіть кілька фото.
      </p>
    </main>
  );
}
