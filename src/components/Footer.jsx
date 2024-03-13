import instagramIcon from "../icons/instagramIcon.svg";
import fbIcon from "../icons/fbIcon.svg";
import twitterIcon from "../icons/twitterIcon.svg";
import YoutubeIcon from "../icons/YoutubeIcon.svg";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="wrapper-container flex flex-col sm:flex-row gap-2 items-center justify-between my-20 border-t-2 border-[#251733] pt-10 sm:pt-6">
      <div>
        <div className="flex flex-col justify-center items-center sm:items-start">
          <Logo />
          <ul className="flex items-center gap-4 my-4 ">
            <SocialIcon
              link="https://www.instagram.com/"
              icon={instagramIcon}
            />
            <SocialIcon link="https://www.example.com/" icon={fbIcon} />
            <SocialIcon link="https://www.example.com/" icon={twitterIcon} />
            <SocialIcon link="https://www.example.com/" icon={YoutubeIcon} />
          </ul>
        </div>
        <small className="mt-2 text-sm text-[#B6B6B6]">
          2021 CoinMarketCap. All rights reserved
        </small>
      </div>

      <ul className="flex gap-3 mt-4 text-sm text-[#B6B6B6] ">
        <Legacy
          title="Privacy"
          link="https://www.google.com.ua/search?q=privacy&lr=-lang_ru#ip=1"
        />
        <Legacy
          title="Terms of Use"
          link="https://www.google.com.ua/search?q=privacy&lr=-lang_ru#ip=1"
        />
      </ul>
    </footer>
  );
}

export function SocialIcon({ icon, link }) {
  return (
    <li>
      <a href={link}>
        <img className="hoverElement" src={icon} alt="social icon" />
      </a>
    </li>
  );
}

export function Legacy({ title, link }) {
  return (
    <li>
      <a className="hoverElement" href={link}>
        {title}
      </a>
    </li>
  );
}
