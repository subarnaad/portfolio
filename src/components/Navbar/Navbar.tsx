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
     <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-background rounded-2xl flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 shadow-lg shadow-foreground/20">
    <div 
      className="text-base sm:text-lg md:text-xl font-bold cursor-pointer 
                 hover:text-purple-600 transition duration-300"
      onClick={() => handleScroll('home')}
    >
      Subarna Adhikari
    </div>

    <div className="hidden md:flex space-x-6 lg:space-x-10">
      {sections.map((sec) => (
        <button
          key={sec}
          onClick={() => handleScroll(sec)}
          className={`font-medium text-sm sm:text-base lg:text-lg transition duration-300 cursor-pointer
            ${activeSection === sec ? "text-purple-600 " : "text-foreground hover:text-purple-600"}
          `}
          aria-label={`Scroll to ${sec}`}
        >
          {sec.charAt(0).toUpperCase() + sec.slice(1)}
        </button>
      ))}
    </div>
    <div className="md:hidden">
      <MobileDropdown handleScroll={handleScroll} />
    </div>

  </nav>
);

}
