import { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-ful text-white  sticky top-0 z-[1] ${
        scrollPosition > 200 ? "backdrop-blur shadow-2xl" : "transparent"
      }`}>
      <div className="wrapper-container flex items-center justify-between h-14 w-full">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
