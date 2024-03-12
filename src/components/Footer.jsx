import instagramIcon from "../icons/instagramIcon.svg";
import fbIcon from "../icons/fbIcon.svg";
import twitterIcon from "../icons/twitterIcon.svg";
import YoutubeIcon from "../icons/YoutubeIcon.svg";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="wrapper-container flex gap-2 flex-col items-center my-20">
      <img src={logo} alt="logo" />
      <ul className="flex items-center gap-2 my-2">
        <SocialIcon link="https://www.instagram.com/" icon={instagramIcon} />
        <SocialIcon link="https://www.example.com/" icon={fbIcon} />
        <SocialIcon link="https://www.example.com/" icon={twitterIcon} />
        <SocialIcon link="https://www.example.com/" icon={YoutubeIcon} />
      </ul>

      <ul className="flex gap-3 mt-4 ">
        <Legacy
          title="Privacy"
          link="https://www.google.com.ua/search?q=privacy&lr=-lang_ru#ip=1"
        />
        <Legacy
          title="Terms of Use"
          link="https://www.google.com.ua/search?q=privacy&lr=-lang_ru#ip=1"
        />
      </ul>

      <small className="mt-2 text-sm text-[#B6B6B6]">
        2021 CoinMarketCap. All rights reserved
      </small>
    </footer>
  );
}

export function SocialIcon({ icon, link }) {
  return (
    <li>
      <a href={link}>
        <img src={icon} alt="social icon" />
      </a>
    </li>
  );
}

export function Legacy({ title, link }) {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
}
