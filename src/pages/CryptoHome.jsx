import Intro from "../components/Intro";
import MarketUpdate from "../components/MarketUpdate";
import Trending from "../components/Trending";

export default function CryptoHome() {
  return (
    <main>
      <Intro />
      <Trending />
      <MarketUpdate />
    </main>
  );
}
