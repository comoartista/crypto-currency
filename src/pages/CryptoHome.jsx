import GetStarted from "../components/GetStarted";
import Intro from "../components/Intro";
import MarketsUpdate from "../components/MarketsUpdate";
import Trending from "../components/Trending";

export default function CryptoHome() {
  return (
    <main className="">
      <div className="absolute -z-[1] top-[30%] right-[30%] w-[675px] h-[314px] bg-[#7000FF] rounded-full blur-[300px]" />
      <div className="absolute -z-[1] top-[30%] right-[24%] w-[275px] h-[214px] bg-[#FF00C7] opacity-60 rounded-full blur-[150px]" />
      <Intro />
      <Trending />
      <MarketsUpdate itemsPerPage={8} />
      <div className="relative">
        <GetStarted />
        <div className="absolute -z-[1] bottom-[30%] right-[30%] w-[675px] h-[314px] bg-[#7000FF] rounded-full blur-[300px]" />
        <div className="absolute -z-[1] top-[30%] left-[24%] w-[175px] h-[214px] bg-[#FF00C7] opacity-60 rounded-full blur-[150px]" />
      </div>
    </main>
  );
}
