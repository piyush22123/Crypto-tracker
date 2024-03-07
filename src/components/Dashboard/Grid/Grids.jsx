import React from "react";
import "./styles.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Link } from "react-router-dom";

const Grids = ({ coin }) => {
  return (
    // conditionally change color of hover effect
    <Link to={`/coin/${coin.id}`}>
      <div
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}
      >
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>
        {/* --- if price of chip is negative then use 2nd div with calssname chip-red  */}
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip">
              <TrendingUpIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="red-icon-chip">
              <TrendingDownIcon />
            </div>
          </div>
        )}

        {/* -- conditionally changing price color */}
        {coin.price_change_percentage_24h > 0 ? (
          <div className="info-container">
            <h3 className="coin-price">
              Rs {coin.current_price.toLocaleString()}
            </h3>
          </div>
        ) : (
          <div className="info-container">
            <h3 className="red-price">
              Rs {coin.current_price.toLocaleString()}
            </h3>
          </div>
        )}

        <p className="total_volume">
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="total_volume">
          Market Cap : {coin.market_cap.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default Grids;
