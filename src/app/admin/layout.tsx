import Image from "next/image"
import { ReactNode } from "react"
import logo from "../../../public/logo.svg"

interface AdminLayoutProps {
  children: ReactNode
}
export default function AdminLayout({children}: Readonly<AdminLayoutProps>){
  
  return (
   <div className="flex flex-col w-[1024px] justify-between h-screen m-auto">
    <nav>
      <Image width={96} height={96} src={logo} alt="logo" />
      <ul className="flex gap-2">
        <li>Awards</li>
        <li>Categories</li>
        <li>Games</li>
      </ul>
    </nav>
    <main className="flex-1">{children}</main>
    <footer>
        &copy; Awardlys {new Date().getFullYear()}
      </footer>
   </div>
  )
}