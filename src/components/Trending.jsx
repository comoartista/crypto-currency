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

  console.log(responce);

  return (
    <section className="wrapper-container mb-20 sm:mb-40">
      <h2 className="text-2xl mb-4 sm:mb-6">Market Trend</h2>
      <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-4 sm:grid-cols-2 md:justify-between w-full">
        {responce &&
          firstFour.map((coin) => (
            <CoinTrending key={coin.item.coin_id} coin={coin} />
          ))}
      </div>
    </section>
  );
}
