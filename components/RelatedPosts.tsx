import Link from "next/link";

interface RelatedPost {
  slug: string;
  title: string;
  date: string;
}

export default function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  if (!posts.length) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Читайте також</h2>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="block p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <h3 className="text-lg font-medium">{post.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString("uk-UA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
