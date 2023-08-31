import Link from "next/link";

interface Post {
  title: string;
  content: string;
  slug: string;
}
/* export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
 */
export interface BlogPostPageProps {
  /*   params: {
    slug: string;
  }; */
}

export default async function BlogPostPage({}: BlogPostPageProps) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  return (
    <div className="px-16 py-6 min-h-[85.3dvh]">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="flex flex-1 flex-row w-full flex-wrap">
        {!posts
          ? "Aparentely there are no posts"
          : posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                className="min-w-40 h-40 flex flex-col px-4 py-2 transition-all hover:bg-gray-100 rounded-md cursor-pointer"
              >
                <p>{post.title}</p>
                <p>{post.content.slice(0, 50)}</p>
              </Link>
            ))}
      </div>
    </div>
  );
}
