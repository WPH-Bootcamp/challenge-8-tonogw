import { navLink } from "../../data/navigation";
import type { NavItem } from "../../types";
import yourlogo from "../../assets/logo/logo-yourlogo.png";
import yourlogodark from "../../assets/logo/yourlogodark.png";
import { useEffect, useState } from "react";
// import LetsTalkSection from "../sections/LetsTalkSection";

import { Menu, X } from "lucide-react";

interface NavbarProps {
  // Define your props here
  navItems?: NavItem[];
}

const Navbar = ({ navItems = navLink }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header
      className="
      relative
     top-0 z-50 h-16 lg:h-21  
    bg-white dark:bg-black
    backdrop-blur-md
    "
    >
      <div
        className="
    mx-auto flex h-full max-w-7xl items-center
    justify-between px-6 lg:px8
    "
      >
        <img className="hidden dark:block" src={yourlogo} alt="your logo" />
        <img
          className="block dark:hidden"
          src={yourlogodark}
          alt="Your logo dark"
        />
        <div
          className="
          text-2xl font-bold text-gray-900 dark:text-white
        "
        ></div>
        {/* Navigation */}
        <nav
          className="
          hidden items-center gap-8 lg:flex
        "
        >
          {navItems.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
            text-md font-semibold text-[#0A0D12] dark:text-white
            transition-colors duration-300 hover:text-[#FF623E]
            "
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex item-center gap-4">
          {/* TOGGLE DARK/LIGHT */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
          flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
          bg-slate-100 dark:bg-slate-800
          text-slate-700 dark:text-slate-200
          hover:bg-slate-200 dark:hover:bg-slate-700
          border border-slate-200 dark:border-slate-600
          transition-all duration-200 cursor-pointer
        "
          >
            {darkMode ? "☀️  Light" : "🌙  Dark"}
          </button>

          {/* BUTTON DESKTOP */}
          <a
            href="#letstalk"
            className="
          hidden lg:flex h-11 w-[197px] items-center justify-center
          rounded-full bg-[#FF623E] text-sm font-semibold text-white
        "
          >
            Let's Discuss
          </a>
          {/* MOBILE HAMBURGER MENU */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="
          lg:hidden 
          text-2xl text-gray-900 dark:text-white 
        "
          >
            <Menu size={32} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="
          fixed inset-0
          z-999

          min-h-screen
          w-full

          
          bg-white
          dark:bg-black

          px-6
          py-6

          flex flex-col
          transition-all
          duration-300
          "
        >
          {/* TOP */}
          <div className="flex items-center justify-between">
            <img src={yourlogo} alt="Your Logo" className="hidden dark:flex" />
            <img
              src={yourlogodark}
              alt="Your Logo"
              className="flex dark:hidden"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className=" text-gray-900 dark:text-white "
            >
              <X size={32} />
            </button>
          </div>

          {/* NAVIGATION */}
          <nav className="mt-16 flex flex-col gap-8">
            {navItems.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="
                  text-2xl
                  font-bold

                  text-[#0A0D12]
                  dark:text-white

                  transition-colors
                  duration-300

                  hover:text-[#FF623E]
                  "
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* BUTTON */}
          <a
            href="#letstalk"
            onClick={() => setIsMenuOpen(false)}
            className="
            mt-auto
            flex
            h-12
            items-center
            justify-center

            rounded-full
            lg-[#FF623E]

            text-white font-semibold
            "
          >
            Let's Discuss
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
