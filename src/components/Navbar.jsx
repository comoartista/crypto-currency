import { useNavigate } from "react-router";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="text-white h-14 flex items-center ">
      <div className="wrapper-container w-full">
        <div onClick={() => navigate("/")} className="flex items-center cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}
