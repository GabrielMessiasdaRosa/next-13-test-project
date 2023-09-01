import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return new NextResponse(JSON.stringify(posts), {
    headers: { "content-type": "application/json" },
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  await prisma.post.create({
    include: {
      author: true,
    },
    data: {
      ...body,
    },
  });
  revalidateTag("posts");

  return NextResponse.json({ message: "ok" });
}
