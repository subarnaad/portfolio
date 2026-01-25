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
    <nav className="fixed top-0 left-0 w-full flex justify-evenly items-center p-4 --background">
      <div className="text-xl font-bold cursor-pointer" onClick={()=>handleScroll('home')}>Subarna Adhikari</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 ">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => handleScroll(sec)}
            className={`font-medium p-4 hover:cursor-pointer text-2xl ${
              activeSection === sec ? " text-purple-600" : ""
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
