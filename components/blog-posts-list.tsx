"use client";

import { Post } from "@/app/blog/page";
import Link from "next/link";

export interface BlogPostsListProps {
  posts: Post[];
}

export default function BlogPostsList({ posts }: BlogPostsListProps) {
  return (
    <div>
      {!posts
        ? "Aparentely there are no posts"
        : posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              className="min-w-40 h-40 flex flex-col px-4 py-2 transition-all hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <p>{post.title}</p>
              <p>{post.content.slice(0, 50)}...</p>
            </Link>
          ))}
    </div>
  );
}
