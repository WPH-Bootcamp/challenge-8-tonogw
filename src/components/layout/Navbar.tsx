import { navLink } from "../../data/navigation";
import type { NavItem } from "../../types";
import yourlogo from "../../assets/logo/logo-yourlogo.png";
import yourlogodark from "../../assets/logo/yourlogodark.png";
import { useEffect, useState } from "react";

interface NavbarProps {
  // Define your props here
  navItems?: NavItem[];
}

const Navbar = ({ navItems = navLink }: NavbarProps) => {
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

        {/* TOGGLE DARK/LIGHT */}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
          flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
          bg-slate-100 dark:bg-slate-800
          text-slate-700 dark:text-slate-200
          hover:bg-slate-200 dark:hover:bg-slate-700
          border border-slate-200 dark:border-slate-600
          transition-all duration-200
        "
        >
          {darkMode ? "☀️  Light" : "🌙  Dark"}
        </button>

        {/* BUTTON */}
        <button
          className="
          hidden lg:flex h-11 w-[197px] items-center justify-center
          rounded-full bg-[#FF623E] text-sm font-semibold text-white
        "
        >
          Let's Discuss
        </button>
        {/* MOBILE MENU */}
        <button
          className="
          text-2xl text-gray-900 dark:text-white lg:hidden
        "
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;

// export default function NavbarSection({ navLink }: NavItem[]) {
//   return (
//     <header className="min:h-44 md:h-64 lg:h-84 bg-white dark:bg-gray-900 dark:text-white">
//       <div className="">
//         <div className="text-left">
//           <img src="../" alt="" />
//         </div>
//         <div className="text-center"></div>
//         <div className="text-"></div>
//       </div>
//     </header>
//   );
// }
