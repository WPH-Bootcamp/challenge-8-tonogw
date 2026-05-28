import { navLink } from "../../data/navigation";
import type { NavItem } from "../../types";

import yourlogo from "../../assets/logo/logo-yourlogo.png";
import yourlogodark from "../../assets/logo/yourlogodark.png";

import SocialMediaSection from "../sections/SocialMediaSection";

interface FooterProps {
  // Define your props here
  navItems?: NavItem[];
}

const Footer = ({ navItems = navLink }: FooterProps) => {
  return (
    // FOOTER
    <footer
      id="footer"
      className="
        bg-white dark:bg-black
            text-center text-base
        text-gray-900 dark:text-white
        px-4
        py-6
        "
    >
      {/* CONTAINER */}
      <div
        className="
            mx-auto max-w-290  bg-gray-200 dark:bg-gray-900
            rounded-3xl
            "
      >
        {/* TOP SECTION */}
        <div
          className="
            flex
            flex-col 
            lg:flex-row
            lg:items-start
            lg:justify-between 
            "
        >
          {/* MOBILE LOGO ONLY*/}
          <div className="mb-8 lg:hidden">
            <img
              src={yourlogodark}
              alt="Logo"
              className="
                    block dark:hidden
                    "
            />
            <img
              src={yourlogo}
              alt="Logo"
              className="
                hidden dark:block
                "
            />
          </div>

          {/* TITLE */}
          <h2
            className="
                pb-4
                lg:pb-15
                py-6
                lg:pt-10
                pl-2
                lg:pl-10
                
                text-[28px]
                text-left
                lg:text-4xl 
                font-bold
                text-gray-900
                dark:text-white
                lg:max-w-80.25
                "
          >
            LET'S DISCUSS YOUR IDEA
          </h2>

          {/* DESKTOP LOGO */}
          <div className="px-10 pt-15 hidden lg:block">
            <img
              src={yourlogodark}
              alt="your logo"
              className="block dark:hidden"
            />
            <img
              src={yourlogo}
              alt="Your logo dark"
              className="hidden dark:block"
            />
          </div>
        </div>
        {/* DIVIDER  */}
        <div
          className="
            w-full 
            mt-10
            h-px 
            bg-[#D5D7DA]
            dark:bg-[#252B37]
            "
        />
        <div>
          {/* NAVIGATION & SOCIAL MEDIA */}
          <div
            className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-8
            pt-10
            lg:pl-10
            lg:pr-10
            px-2
        "
          >
            {/* NAVIGATION LINKS */}
            <nav
              className="
              flex
              flex-col
              lg:flex-row
              gap-8
            "
            >
              {navItems.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                  text-left
                  h-9
                  align-middle text-sm sm:text-base font-semibold text-[#0A0D12] dark:text-white
                  transition-colors duration-300 hover:text-[#FF623E]
                  hover:font-bold 
                "
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* SOCIAL MEDIA LINKS */}
            <div className="pb-5">
              <SocialMediaSection />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      &copy;2026 gunar<strong>TO</strong> wibiso<strong>NO</strong>. All Rights
      Reserved.
    </footer>
  );
};

export default Footer;
