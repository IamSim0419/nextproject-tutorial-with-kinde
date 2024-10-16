"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post",
  },
];

export default function Headers() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b border-b-zinc-500">
      <Link href="/">
        <Image
          src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
          alt="Logo"
          width="50"
          height="50"
          className="w-12 h-12"
        />
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-base font-bold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathname === link.href
                    ? "bg-zinc-800 text-white px-4 py-2 rounded-xl"
                    : "text-zinc-500"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
