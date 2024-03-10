import useAxios from "../hooks/useAxios";
import Coin from "./Coin";
import Skeleton from "./Skeleton";

export default function MarketUpdate() {
  const { responce, loading } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  );
  if (loading) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-2">
      <h2 className="text-4xl mb-8">Market Update</h2>
      <div className="card-bg text-[#B6B6B6]">
        <div className="grid grid-cols-4 px-8 py-5 uppercase tracking-wide">
          <p>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
        </div>
        <Coin />
        {responce && responce.map((coin) => <Coin key={coin.id} coin={coin} />)}
        {console.log("Hello")}

      </div>
    </section>
  );
}
