import GetStarted from "../components/GetStarted";
import Intro from "../components/Intro";
import MarketsUpdate from "../components/MarketsUpdate";
import Trending from "../components/Trending";

export default function CryptoHome() {
  return (
    <main>
      <Intro />
      <Trending />
      <MarketsUpdate itemsPerPage={8} />
      <GetStarted />
    </main>
  );
}
