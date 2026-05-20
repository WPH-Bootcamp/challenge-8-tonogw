import type { navLink } from "../../data/navigation";

// interface NavbarProps {
//   // Define your props here
// }

// const Navbar = ({}: NavbarProps) => {
//   return (
//     <Navbar className="sticky top-0 z-50 h-21 border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
//       {/* Your navbar implementation */}
//     </Navbar>
//   );
// };

// export default Navbar;

export default function NavbarSection(navLink) {
  return (
    <section className="min:h-44 md:h-64 lg:h-84 bg-white dark:bg-gray-900 dark:text-white">
      <div className=""></div>
    </section>
  );
}
