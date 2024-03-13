import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "./constants";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  document.body.classList.toggle("overflow-hidden", isOpen);

  return (
    <nav className="">
      <ul className="hidden sm:flex flex-row gap-6 ">
        {navLinks.map((nav) => (
          <li key={nav.path}>
            <Link
              scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
              className="hoverElement"
              to={`/${nav.path}`}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex items-center w-full">
        <button className="z-[2]" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } bg-black-gradient absolute top-0 right-0 h-screen w-full bg-[#251733] z-[1] transition-opacity`}>
          <ul className="flex flex-col items-center justify-center gap-6 w-full">
            {navLinks.map((nav) => (
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-2xl"
                key={nav.path}>
                <a href={nav.path}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
