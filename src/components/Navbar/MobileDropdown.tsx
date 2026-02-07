
"use client";
import { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import menu from '../../../public/menu.svg'

export default function MobileDropdown({ handleScroll }: { handleScroll: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const sections = ["home", "projects", "blog", "contact"];

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger aria-label="Open menu" className="md:hidden" >
        <Image src={menu} alt="menu" width={24} height={24} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40 rounded shadow-lg p-2">
        {sections.map((sec) => (
          <DropdownMenuItem asChild key={sec}>
            <button
              className="w-full text-left p-2 border-b-2 border-blue-400 cursor-pointer"
              onClick={() => {
                handleScroll(sec);
                setOpen(false);
              }}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
