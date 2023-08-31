import BlogPostsList from "@/components/blog-posts-list";
import { Metadata } from "next";

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
export default async function BlogPage({}: BlogPageProps) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  return (
    <div className="px-16 py-6 min-h-[85.3dvh]">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="flex flex-1 flex-row w-full flex-wrap">
        <BlogPostsList posts={posts} />
      </div>
    </div>
  );
}
