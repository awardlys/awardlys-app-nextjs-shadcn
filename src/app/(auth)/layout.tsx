import { ModeToggle } from "@/components/toggleTheme";
import Image from "next/image";
import { ReactNode } from "react";
import logo from "../../../public/logo.svg";
import { TabsContentAuth } from "./components/tabs";

export default function LayoutAuth({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="grid grid-cols-app gap-2 p-2 min-h-screen relative">
      <div className="flex items-center rounded-xl justify-center bg-muted-foreground dark:bg-muted dark:opacity-20">
        {" "}
        <div className=" p-4 rounded-full">
          <Image src={logo} width={150} height={150} alt="logo" />
        </div>
      </div>
      <div className="flex sm:mt-[15%] 2xl:mt-[25%] justify-center">
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
        <TabsContentAuth>{children}</TabsContentAuth>
      </div>
    </div>
  );
}
