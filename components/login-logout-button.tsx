"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export interface LoginLogoutButtonProps {}

export default function LoginLogoutButton({}: LoginLogoutButtonProps) {
  const { status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <Link href={"/api/auth/signout"}>{`signout`}</Link>
      ) : (
        <Link href={"/api/auth/signin"}>{`signin`}</Link>
      )}
    </div>
  );
}
