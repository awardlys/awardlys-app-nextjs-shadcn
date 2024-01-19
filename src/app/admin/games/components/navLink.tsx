"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
}

export function NavLink(props: Readonly<NavLinkProps>) {
  const current = usePathname();

  return (
    <Link
      data-current={current === props.href}
      {...props}
      className="px-4 py-2 rounded-2xl hover:bg-gray-500 data-[current=true]:bg-foreground data-[current=true]:text-muted"
    >
      {props.children}
    </Link>
  );
}
