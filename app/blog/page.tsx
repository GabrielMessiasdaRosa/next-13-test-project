import BlogPostsList from "@/components/blog-posts-list";
import { baseUrl } from "@/lib/base-url";
import { PostType } from "@/types/post-type";
import { Metadata } from "next";
import { Suspense } from "react";

export interface Post {
  title: string;
  content: string;
  slug: string;
}

export interface BlogPageProps {}
export const metadata: Metadata = {
  title: "Blog | Test Project",
  description: "Blog page",
};

async function getPosts() {
  const getPostsURL = `${baseUrl}/api/content`;
  const res = await fetch(getPostsURL);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data as PostType[];
}

export default async function BlogPage({}: BlogPageProps) {
  const posts: PostType[] = await getPosts();
  return (
    <div className="px-16 py-6 min-h-[85.3dvh]">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogPostsList posts={posts} />
      </Suspense>
    </div>
  );
}
