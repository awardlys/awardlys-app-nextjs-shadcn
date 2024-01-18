"use client";
import { NavLink } from "@/app/admin/categories/components/navLink";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { AwardIcon } from "lucide-react";
import { ModeToggle } from "./toggleTheme";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Header() {
  return (
    <header className="flex justify-between mx-6 py-4 items-center select-none">
      <div className="flex items-center gap-1">
        <span className="font-bold">awardlys</span>
        <Separator className="h-4 w-px bg-muted-foreground" />
        <AwardIcon size={18} />
      </div>
      <nav className="flex gap-6">
        <ul className="flex h-full gap-6 items-center">
          <li>
            <NavLink href={"/admin/awards"}>awards</NavLink>
          </li>
          <li>
            <NavLink href={"/admin/categories"}>categories</NavLink>
          </li>
          <li>
            <NavLink href={"/admin/games"}>games</NavLink>
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
