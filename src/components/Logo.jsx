import { useNavigate } from "react-router";
import logo from "../assets/logo.svg";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="flex items-center cursor-pointer">
      <img src={logo} alt="logo" />
    </div>
  );
}
