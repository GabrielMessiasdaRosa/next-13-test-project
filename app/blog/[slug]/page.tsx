export const dynamic = "force-dynamic";

import { PostType } from "@/types/post-type";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/content/${slug}`
  );
  const post = await res.json();
  console.log("serverside", post);
  return (post as PostType) || {};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const session = await getServerSession();
  if (!session) return redirect("/api/auth/signin");
  const post = await getPostBySlug(params.slug);

  return (
    <div className="px-16 py-6 min-h-[85.3dvh]">
      <div>
        {!post.slug ? (
          "not found"
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
            <p className="text-lg lg:w-1/2 px-4 py-2">{post.content}</p>
            <p className="text-lg lg:w-1/2 px-4 py-2">By - {post?.author?.name}</p>
          </>
        )}
      </div>
    </div>
  );
}
