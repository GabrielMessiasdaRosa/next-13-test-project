import { createDTO } from "@/lib/create-dto";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const users = await prisma.user.findMany();
  const usersDto = createDTO(users, {
    id: "id",
    name: "name",
    image: "image",
  });
  return new NextResponse(JSON.stringify(usersDto), {
    headers: { "content-type": "application/json" },
  });
}
