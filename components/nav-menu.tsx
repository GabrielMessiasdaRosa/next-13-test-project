import Link from "next/link";
import Avatar from "./avatar";
import LoginLogoutButton from "./login-logout-button";

export interface NavMenuProps {}

export default function NavMenu({}: NavMenuProps) {
  return (
    <nav className="px-16 flex flex-col lg:flex-row items-center justify-between bg-rose-500 text-white">
      <Link href={"/"} className="font-bold text-2xl">
        NEXT PROJECT TEST
      </Link>
      <ul className="flex flex-row flex-wrap uppercase font-semibold text-xl space-r-2">
        <li className="cursor-pointer transition-all duration-500 hover:bg-gray-50 hover:text-gray-800 px-4 py-2">
          <Link href={"/"}>home</Link>
        </li>
        <li className="cursor-pointer transition-all duration-500 hover:bg-gray-50 hover:text-gray-800 px-4 py-2">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="cursor-pointer transition-all duration-500 hover:bg-gray-50 hover:text-gray-800 px-4 py-2">
          <Link href={"/blog"}>blog</Link>
        </li>
        {/*   <li className="cursor-pointer transition-all duration-500 hover:bg-gray-50 hover:text-gray-800 px-4 py-2">
          <Link href={"/users"}>users</Link>
        </li> */}
        <li className="cursor-pointer transition-all duration-500 bg-rose-700 hover:bg-gray-200 hover:text-gray-800 px-4 py-2">
          <LoginLogoutButton />
        </li>
        <li>
          <Avatar />
        </li>
      </ul>
    </nav>
  );
}
