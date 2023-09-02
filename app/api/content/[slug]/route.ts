import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  route: { params: { slug: string } }
) {
  const slug = route.params.slug;
  const post = await prisma.post.findUnique({
    where: { slug },
    include: {
      author: true, // Isso trará todas as postagens associadas ao usuário
    },
  });
  return new NextResponse(JSON.stringify(post), {
    headers: { "content-type": "application/json" },
  });
}
