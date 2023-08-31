import { baseUrl } from "@/lib/base-url";
import { PostType } from "@/types/post-type";
import { Metadata } from "next";

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
  const getPostsURL = `${baseUrl}/api/content`;
  const res = await fetch(getPostsURL);
  const posts = await res.json();
  const post = posts.find((post: PostType) => post.slug === params.slug)!;

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
