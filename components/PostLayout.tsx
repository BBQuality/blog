import { ReactNode } from "react";

export default function PostLayout({
  title,
  date,
  children,
}: {
  title: string;
  date: string;
  children: ReactNode;
}) {
  return (
    <article className="prose dark:prose-invert lg:prose-xl max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <time className="text-gray-500 dark:text-gray-400 text-sm">
          {new Date(date).toLocaleDateString("uk-UA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>

      <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

      <div>{children}</div>
    </article>
  );
}
