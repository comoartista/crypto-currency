import PropTypes from "prop-types";
import { TrendingDownIcon, TrendingUpIcon } from "../icons/icons";
import { Link } from "react-router-dom";

export default function CoinTrending({ coin }) {
  const { item } = coin;
  return (
    <Link to={`/coin/${item.id}`}>
    <div className="card-bg px-5 py-6 w-full">
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-4 items-center justify-between border-b mb-4 pb-4 border-[#251733]">
          <img className="w-[34px] h-[34px]" src={item.small} alt={item.name} />
          <p>{item.symbol}</p>
          <p className="bg-[#C6C6C6] px-2 py-1 rounded-md uppercase text-[10px] text-black">
            {item.name}
          </p>
        </div>
      </div>
      <div className="flex  items-center justify-between">
        <div>
          <p>{item.data.price}</p>
          <span
            className={`${
              coin.price_change_percentage_24h < 0
                ? "text-[#AE0000]"
                : "text-[#0FAE96]"
            } flex gap-2`}>
            {item.data.price}
          </span>
        </div>
        <div
          className={`${
            coin.price_change_percentage_24h < 0
              ? "text-[#AE0000]"
              : "text-[#0FAE96]"
          } flex gap-2`}>
          {" "}
          {coin.price_change_percentage_24h < 0 ? (
            <TrendingDownIcon />
          ) : (
            <TrendingUpIcon />
          )}
        </div>
      </div>
    </div>
    </Link>
  );
}

CoinTrending.propTypes = {
  coin: PropTypes.object.isRequired,
};
