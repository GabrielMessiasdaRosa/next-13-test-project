import { PostType } from "@/types/post-type";
import { NextResponse } from "next/server";

const posts: PostType[] = [
  {
    slug: "post-1",
    title: "Post 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis",
  },
  {
    slug: "post-2",
    title: "Post 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis",
  },
  {
    slug: "post-3",
    title: "Post 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis",
  },
  {
    slug: "post-4",
    title: "Post 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis",
  },
  {
    slug: "post-5",
    title: "Post 5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
