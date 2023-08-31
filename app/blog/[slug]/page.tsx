export const dynamic = "force-dynamic";

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

async function getPostBySlug(slug: PostType["slug"]) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/content`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const posts = await res.json();
  const post = posts.find((post: PostType) => post.slug === slug)!;
  return post as PostType;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
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
