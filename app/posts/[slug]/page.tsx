import { getPostData, getSortedPostsData } from "../../../lib/posts";
import PostLayout from "../../../components/PostLayout";
import BackButton from "../../../components/BackButton";
import RelatedPosts from "../../../components/RelatedPosts";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const post = await getPostData(params.slug);
  const allPosts = getSortedPostsData();

  if (!post) {
    return <div className="p-6 text-center">Пост не знайдено</div>;
  }

  // Останні 3 пости, виключаючи поточний
  const related = allPosts
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  return (
    <div className="px-4 py-8">
      <BackButton />
      <PostLayout title={post.title} date={post.date}>
        <div
          className="prose dark:prose-invert lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </PostLayout>
      <RelatedPosts posts={related} />
    </div>
  );
}
