import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'
import Search from '../../components/Search'

export default function PostsPage() {
    const posts = getSortedPostsData()
return (
    <>
    <Search posts={posts} />
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Міні-блог</h1>
      <ul>
        {posts.map(({ slug, title, date }) => (
          <li key={slug} className="mb-4">
            <Link href={`/posts/${slug}`}>
              <p className="text-xl text-blue-600 hover:underline">{title}</p>
            </Link>
            <p className="text-sm text-gray-500">{date}</p>
          </li>
        ))}
      </ul>
    </main>
    </>)
}