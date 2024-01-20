import Image from "next/image";
import { ReactNode } from "react";
import logo from "../../../public/logo.svg";
import { TabsContentAuth } from "./components/tabs";

export default function LayoutAuth({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="grid grid-cols-app gap-2 p-2 min-h-screen">
      <div className="flex items-center rounded-xl justify-center bg-muted">
        {" "}
        <div className="opacity-20">
          <Image src={logo} width={150} height={150} alt="logo" />
        </div>
      </div>
      <div className="flex mt-[20%] justify-center">
        <TabsContentAuth>{children}</TabsContentAuth>
      </div>
    </div>
  );
}
