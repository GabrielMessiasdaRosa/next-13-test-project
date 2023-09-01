import Image from "next/image";
import Link from "next/link";

export interface UsersListProps {
  users: any[];
}

export default function UsersList({ users }: UsersListProps) {
  return (
    <div className="flex flex-1 flex-row w-full flex-wrap items-center justify-center">
      {!users.length
        ? "Aparentely there are no user"
        : users.map((user) => (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className="min-w-40 h-40 flex flex-col px-4 py-2 transition-all hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <p className="font-bold">{user.name}</p>
              <Image
                alt="user image"
                className="rounded-full object-cover"
                width={180}
                height={180}
                src={user?.image!}
              />
            </Link>
          ))}
    </div>
  );
}
