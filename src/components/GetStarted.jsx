import Button from "./Button";
import personAcountIcon from "../icons/personAcountIcon.png";
import walletIcon from "../icons/walletIcon.png";
import buildAcountIcon from "../icons/buildAcountIcon.png";

export default function GetStarted() {
  return (
    <section className="wrapper-container flex flex-col md:flex-row md:justify-between gap-10 md:gap-6 my-[75px] md:my-[190px]">
      <div>
        <h2 className="text-4xl">How To Get Started</h2>
        <p className="text-[#B6B6B6] mt-5 mb-6 md:mb-12">
          Simple and easy way to start your investment in cryptocurrency
        </p>
        <Button link="https://discord.com/">Get Started</Button>
      </div>
      <div>
        <div className="flex flex-col gap-6">
          <GetStartedBlock
            img={personAcountIcon}
            alt="person icon"
            title="Create an account"
            descr="Sign up for a free account and start investing in cryptocurrency"
          />
          <GetStartedBlock
            img={walletIcon}
            alt="wallet icon"
            title="Create an account"
            descr="Connect the bank account to start transactions."
          />
          <GetStartedBlock
            img={buildAcountIcon}
            alt="wallet icon"
            title="Start Build Portfolio"
            descr="Buy and sell popular currencies and keep track of them."
          />
        </div>
      </div>
    </section>
  );
}

export function GetStartedBlock({ img, alt, title, descr }) {
  return (
    <div className="flex gap-6 items-center card-bg py-5 px-5">
      <img className="w-20" src={img} alt={alt} />
      <div>
        <h3 className="text-2xl mb-2">{title}</h3>
        <p className="text-[#B6B6B6]">{descr}</p>
      </div>
    </div>
  );
}
