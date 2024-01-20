"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function TabsContentAuth({
  children,
}: Readonly<{ children: ReactNode }>) {
  const data = usePathname();
  const current = data.split("/")[1];

  return (
    <Tabs defaultValue={current} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 gap-2 ">
        <TabsTrigger asChild value="signIn">
          <Link href={"/signIn"}>Login</Link>
        </TabsTrigger>
        <TabsTrigger asChild value="register">
          <Link href={"/register"}>Criar conta</Link>
        </TabsTrigger>
      </TabsList>
      <TabsContent value={"signIn"}>{children}</TabsContent>
      <TabsContent value={"register"}>{children}</TabsContent>
    </Tabs>
  );
}
