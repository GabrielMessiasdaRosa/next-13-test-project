import UsersList from "@/components/users-list";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
export interface UsersPageProps {}

const getUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`);

  const data = await res.json();
  return data || [];
};

export default async function UsersPage({}: UsersPageProps) {
  const session = await getServerSession();
  if (!session) return redirect("/api/auth/signin");
  const users = await getUsers();

  return (
    <div className="px-16 py-6 min-h-[85.3dvh]">
      <h1 className="text-4xl font-bold mb-8">Users</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersList users={users} />
      </Suspense>
    </div>
  );
}
