import Link from "next/link";
import { ModeToggle } from "./toggleTheme";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Header() {
  return (
    <header className="flex justify-between mx-6 py-4 items-center select-none">
      <span className="font-bold">awardlys</span>
      <nav className="flex gap-6">
        <ul className="flex h-full gap-6 items-center">
          <li>
            <Link href={"/admin/awards"}>awards</Link>
          </li>
          <li>
            <Link href={"/admin/categories"}>categories</Link>
          </li>
          <li>
            <Link href={"/admin/games"}>games</Link>
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
