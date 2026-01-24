// "use client";

// import Link from "next/link";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import image from '../../public/menu.svg'
// import Image  from "next/image";

// export default function Navbar() {
//   return (
//     <header className="border-b">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
//         <h1 className="text-xl font-semibold"><Link href="/">Subarna Adhikari</Link></h1>

//         <nav className="hidden md:flex gap-6 text-sm font-medium">
//           <Link href="/#home">Home</Link>
//           <Link href="/#projects">Projects</Link>
//           <Link href="/#blog">Blog</Link>
//           <Link href="/#contact">Contact</Link>
//         </nav>

//         <DropdownMenu>
//           <DropdownMenuTrigger className="md:hidden text-sm font-medium">
//             <Image src={image} alt="menu" width={24} height={24} />
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuItem asChild>
//               <Link className=" text-red" href="/#home">Home</Link>
//             </DropdownMenuItem>
//             <DropdownMenuItem asChild>
//               <Link href="/#projects">Projects</Link>
//             </DropdownMenuItem>
//             <DropdownMenuItem asChild>
//               <Link href="/#blog">Blog</Link>
//             </DropdownMenuItem>
//             <DropdownMenuItem asChild>
//               <Link href="/#contact">Contact</Link>
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </header>
//   );
// }


"use client";
import { useState } from "react";
import MobileDropdown from "./MobileDropdown";
import { scrollToSection } from "../../../lib/utils/scrollTo";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = ["home", "projects", "blog", "contact"];

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setActiveSection(id);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4">
      <div className="text-xl font-bold">My Portfolio</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => handleScroll(sec)}
            className={`font-medium text-white ${
              activeSection === sec ? "text-white" : "text-gray-800"
            }`}
            aria-label={`Scroll to ${sec}`}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <MobileDropdown handleScroll={handleScroll} />
    </nav>
  );
}
