import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";
import Skeleton from "./Skeleton";

export default function Trending() {
  const { responce, loading } = useAxios("/search/trending");
  const firstFour = responce && responce.coins.slice(0, 4);

  if (loading) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    );
  }

  return (
    <section className="wrapper-container mb-40">
      <h2 className="text-2xl mb-6">Market Trend</h2>
      <div className="flex flex-wrap sm:flex-nowrap justify-between gap-6">
        {responce &&
          firstFour.map((coin) => (
            <CoinTrending key={coin.item.coin_id} coin={coin} />
          ))}
      </div>
    </section>
  );
}
