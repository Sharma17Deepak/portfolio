import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="flex justify-between h-16 md:items-center text-neutral-900 dark:text-white px-10 pt-6 md:px-20 relative">
      <span className="text-3xl font-bold tracking-wide cursor-pointer">
        Portfolio
      </span>

      {/* Nav Links */}
      <ul className={`${menu ? "fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 backdrop-blur-lg flex flex-col items-center justify-center z-50" : "hidden"} md:flex md:relative md:h-auto md:w-auto md:flex-row gap-6 font-semibold transition-all duration-300`}>

        <a href="#About">
          <li className="text-md md:bg-transparent text-center md:hover:border-b-2 md:hover:scale-110 border-b-2 transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md md:bg-transparent text-center md:hover:border-b-2 md:hover:scale-110 border-b-2 transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md md:bg-transparent text-center md:hover:border-b-2 md:hover:scale-110 border-b-2 transition-all duration-300 p-1 md:p-0">
            Skills
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md md:bg-transparent text-center md:hover:border-b-2 md:hover:scale-110 border-b-2 transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
        <DarkMode />
      </ul>

      {/* Mobile Menu Toggle */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 z-50 cursor-pointer"
          onClick={() => {
            openMenu(true);
            setShowmenu(false);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 z-50 cursor-pointer"
          onClick={() => {
            openMenu(false);
            setShowmenu(true);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
