import PropTypes from "prop-types";
import currencyFormat from "../utils";
import { TrendingDownIcon, TrendingUpIcon } from "../icons/icons";
import { Link } from "react-router-dom";
export default function Coin({ coin }) {
  if (!coin) {
    return null; // or you can render a loading indicator or an error message
  }
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="grid grid-cols-4 items-center px-8 py-5 border-t-2 border-[#251733] hover:bg-[#150e23] cursor-pointer transition-all">
        <div className="flex items-center gap-3">
          <img className="w-[34px] h-[34px]" src={coin.image} alt={coin.name} />
          <p>{coin.name}</p>
          <span className="uppercase  text-[#49474b]">{coin.symbol}</span>
        </div>

        <span>{currencyFormat(coin.current_price)}</span>
        <span
          className={`${
            coin.price_change_percentage_24h < 0
              ? "text-[#AE0000]"
              : "text-[#0FAE96]"
          } flex gap-2`}>
          {coin.price_change_percentage_24h < 0 ? (
            <TrendingDownIcon />
          ) : (
            <TrendingUpIcon />
          )}
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
        <div>
          <span>{coin.market_cap}</span>
        </div>
      </div>
    </Link>
  );
}

Coin.propTypes = {
  coin: PropTypes.object,
};
