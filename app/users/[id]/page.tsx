export const dynamic = "force-dynamic";

import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export interface UserDetailsPageProps {
  params: {
    id: string;
  };
}
export const metadata: Metadata = {
  title: "Blog | Test Project",
  description: "Blog page",
};

async function getUserById(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`);

  const users = await res.json();
  const user = users.find((user: any) => user.id === id)!;
  return (user as any) || {};
}

export default async function UserDetailsPage({
  params,
}: UserDetailsPageProps) {
  const session = await getServerSession();
  if (!session) return redirect("/api/auth/signin");
  const user = await getUserById(params.id);

  return (
    <div className="px-16 py-6 min-h-[85.3dvh]">
      <div className="items-center flex flex-col justify-center">
        {!user.id ? (
          "not found"
        ) : (
          <>
            <p className="font-bold">{user.name}</p>
            <Image
              alt="user image"
              className="rounded-full object-cover"
              width={180}
              height={180}
              src={user?.image!}
            />
          </>
        )}
      </div>
    </div>
  );
}
