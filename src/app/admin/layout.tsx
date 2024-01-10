import { Header } from "@/components/header";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}
export default function AdminLayout({ children }: Readonly<AdminLayoutProps>) {
  return (
    <main className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 mx-6">{children}</div>
      <footer className="flex justify-center p-2 ">
        {" "}
        &copy; Awardlys {new Date().getFullYear()}{" "}
      </footer>
    </main>
  );
}
