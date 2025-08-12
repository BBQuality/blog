import { getPostData, getSortedPostsData } from '../../../lib/posts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: Props) {
  const post = await getPostData(params.slug)

  if (!post) {
    return <div>Пост не знайдено</div>
  }

  return (
    <article className="prose mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  )
}

