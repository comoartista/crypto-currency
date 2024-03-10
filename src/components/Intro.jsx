import Button from "./Button";

export default function Intro() {
  return (
    <section className="wrapper-container flex flex-col gap-4 justify-center items-center mt-40 mb-32 text-center">
      <h1 className="text-4xl  ">Start and Build Your Crypto Portfolio Here</h1>
      <p className="text-gray-400 mb-6 max-w-[520px]">
        Only at CryptoCap, you can build a good portfolio and learn best
        practices about cryptocurrency.
      </p>
      <Button>Get Started</Button>
    </section>
  );
}
