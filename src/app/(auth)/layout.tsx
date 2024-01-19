import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import logo from "../../../public/logo.svg";

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
      <div className="flex mt-44 justify-center">
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2 gap-2 ">
            <TabsTrigger asChild value="login">
              <Link href={"/signIn"}>Login</Link>
            </TabsTrigger>
            <TabsTrigger asChild value="register">
              <Link href={"/register"}>Criar conta</Link>
            </TabsTrigger>
          </TabsList>
          <TabsContent value={"login"}>{children}</TabsContent>
          <TabsContent value={"register"}>{children}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
