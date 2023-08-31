"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export interface AvatarProps {}

export default function Avatar({}: AvatarProps) {
  const { data, status } = useSession();
  const firstName = data?.user?.name?.split(" ")[0];
  return (
    status === "authenticated" && (
      <div className="flex ml-4 h-full items-center gap-3">
        <Image
          alt="user image"
          className="rounded-full object-cover"
          width={48}
          height={24}
          src={data?.user?.image!}
        />
        <p>Hello, {firstName}</p>
      </div>
    )
  );
}
