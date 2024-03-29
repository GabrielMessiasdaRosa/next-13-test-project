"use client";

import { PostType } from "@/types/post-type";
import Link from "next/link";

export interface BlogPostsListProps {
  posts: PostType[];
}

export default function BlogPostsList({ posts }: BlogPostsListProps) {
  console.log(posts);
  return (
    <div className="flex flex-1 flex-row w-full mt-16 flex-wrap items-center justify-center">
      {!posts.length
        ? "Aparentely there are no posts"
        : posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="min-w-40 h-40 flex flex-col px-4 py-2 transition-all hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <p className="font-bold">{post.title}</p>
              <p>{post.content.slice(0, 50)}...</p>
              <p>{post?.author?.name}</p>
            </Link>
          ))}
    </div>
  );
}
