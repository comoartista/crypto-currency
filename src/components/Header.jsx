import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className=" w-ful text-white  sticky top-0 z-[1]  backdrop-blur">
      <div className="wrapper-container flex items-center justify-between h-14 w-full">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
