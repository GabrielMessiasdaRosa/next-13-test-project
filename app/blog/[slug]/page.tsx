import { Metadata } from "next";

interface Post {
  title: string;
  content: string;
  slug: string;
}

export interface BlogPostPageProps {
  params: {
    slug: string;
  };
}
export const metadata: Metadata = {
  title: "Blog | Test Project",
  description: "Blog page",
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const posts: Post[] = await fetch("http://127.0.0.1:3000/api/content").then(
    (res) => res.json()
  );

  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div className="px-16 py-6 min-h-[85.3dvh]">
      <div>
        {!post ? (
          "not found"
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
            <p className="text-lg lg:w-1/2 px-4 py-2">{post.content}</p>
          </>
        )}
      </div>
    </div>
  );
}
