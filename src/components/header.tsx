"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./toggleTheme";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Header() {
  const data = usePathname();
  const current = data.split("/")[2];

  return (
    <header className="flex justify-between mx-6 py-4 items-center select-none">
      <span className="font-bold">awardlys</span>
      <nav className="flex gap-6">
        <ul className="flex h-full gap-6 items-center">
          <li>
            <Link
              className={`px-4 py-2 rounded-2xl ${
                current === "awards" && "bg-foreground text-muted"
              }`}
              href={"/admin/awards"}
            >
              awards
            </Link>
          </li>
          <li>
            <Link
              href={"/admin/categories"}
              className={`px-4 py-2 rounded-2xl ${
                current === "categories" && "bg-foreground text-muted"
              }`}
            >
              categories
            </Link>
          </li>
          <li>
            <Link
              href={"/admin/games"}
              className={`px-4 py-2 rounded-2xl ${
                current === "games" && "bg-foreground text-muted"
              }`}
            >
              games
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4 items-center">
        <ModeToggle />
        <span className="font-bold">Rivaldo Mascarenhas</span>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/108762835?s=96&v=4" />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
