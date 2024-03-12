import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "./constants";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="">
      <ul className="hidden sm:flex flex-row gap-6 ">
        {navLinks.map((nav) => (
          <li key={nav.path}>
            <a href={nav.path}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden ">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } bg-black-gradient absolute top-20 r-0 min-w-[140px]`}>
          <ul className="flex flex-col gap-6 ">
            {navLinks.map((nav) => (
              <li key={nav.path}>
                <a href={nav.path}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// const activeClassName = "selected navlink";
// const activeStyleCallback = ({ isActive }) =>
//   isActive ? activeClassName : "navlink";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   return (
//     <>
//       <nav className="flex flex-[1] items-center justify-end overflow-hidden">
//         <div className="hidden justify-end md:flex gap-6">
//           <NavLinks />
//         </div>

//         <div className="flex w-[75px] justify-end md:hidden">
//           <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
//         </div>
//       </nav>
//       <AnimatePresence mode="wait">
//         {isOpen && (
//           <motion.div
//             layout="position"
//             key="nav-links"
//             initial="hidden"
//             animate="show"
//             className="mt-4 basis-full md:hidden">
//             <motion.div>
//               <NavLink to="/" className={activeStyleCallback}>
//                 Home
//               </NavLink>
//             </motion.div>
//             <motion.div>
//               <NavLink to="/blog" className={activeStyleCallback}>
//                 Blog
//               </NavLink>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export function NavLinks() {
//   return (
//     <>
//       <NavLink to="/" className={activeStyleCallback}>
//         Home
//       </NavLink>
//       <NavLink to="/market" className={activeStyleCallback}>
//         Market
//       </NavLink>
//       <NavLink to="/get-started" className={activeStyleCallback}>
//         How to start
//       </NavLink>
//     </>
//   );
// }
