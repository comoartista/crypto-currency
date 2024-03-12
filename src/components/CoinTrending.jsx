import PropTypes from "prop-types";
import { TrendingDownIcon, TrendingUpIcon } from "../icons/icons";
import { Link } from "react-router-dom";

export default function CoinTrending({ coin }) {
  const { item } = coin;
  return (
    <Link to={`/coin/${item.id}`}>
      <div className="card-bg w-full px-5 py-6">
        <div className="flex w-full items-center justify-between gap-2 border-b border-[#251733]  mb-4 pb-4">
          <div className="flex gap-4 items-center">
            <img
              className="w-[34px] h-[34px]"
              src={item.small}
              alt={item.name}
            />
            <p>{item.symbol}</p>
          </div>
          <div className="bg-[#C6C6C6] px-2 py-1 rounded-md uppercase text-[10px] text-black">
            {item.name}
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <div>
            <p>{item.data.price}</p>
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
