"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Avatar from "./avatar";

export interface LoginLogoutButtonProps {}

export default function LoginLogoutButton({}: LoginLogoutButtonProps) {
  const { status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div className="flex items-center gap-2">
          <Avatar />
          <Link
            className="cursor-pointer transition-all duration-500 bg-red-600 hover:bg-red-800  px-4 py-2"
            href={"/api/auth/signout"}
          >{`signout`}</Link>
        </div>
      ) : (
        <Link
          className="cursor-pointer transition-all duration-500 bg-green-600 hover:bg-green-800 px-4 py-2"
          href={"/api/auth/signin"}
        >{`signin`}</Link>
      )}
    </div>
  );
}
