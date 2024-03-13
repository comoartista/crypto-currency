import PropTypes from "prop-types";
import { currencyFormat, currencyCapFormat } from "../utils";
import { TrendingDownIcon, TrendingUpIcon } from "../icons/icons";
import { Link } from "react-router-dom";

export default function Coin({ coin }) {
  if (!coin) {
    return null;
  }

  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="grid grid-cols-3 sm:grid-cols-4 items-center justify-between px-4 py-5 border-t-2 border-[#251733] hover:bg-[#150e23] cursor-pointer transition-all">
        <div className="flex items-center gap-3">
          <span className="text-sm">{`${coin.market_cap_rank}.`}</span>
          <img className="w-[34px] h-[34px]" src={coin.image} alt={coin.name} />
          <p>
            {coin.name.length < 15
              ? coin.name
              : `${coin.name.slice(0, 10)} ...`}
          </p>
          <span className="-ml-1 uppercase text-[#49474b]">{coin.symbol}</span>
        </div>
        {console.log(coin.name.length)}
        <span className="justify-self-end">
          {currencyFormat(coin.current_price)}
        </span>
        <span
          className={`justify-self-end ${
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
        <span className="justify-self-end hidden sm:block">
          {currencyCapFormat(coin.market_cap)}
        </span>
      </div>
    </Link>
  );
}

Coin.propTypes = {
  coin: PropTypes.object,
};
