"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import image from '../../public/menu.svg'
import Image  from "next/image";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold"><Link href="/">Subarna Adhikari</Link></h1>



        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden text-sm font-medium">
            <Image src={image} alt="menu" width={24} height={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link className=" text-red" href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/projects">Projects</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/blog">Blog</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/contact">Contact</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
