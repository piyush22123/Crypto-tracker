import React from "react";
import "./styles.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Tooltip from "@mui/material/Tooltip";
import { convertNumbers } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";

const List = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="list-row" placement="bottom-start">
        <Tooltip title="Icon">
          <td className="td-image">
            <img src={coin.image} className="coin-logo" />
          </td>
        </Tooltip>
        <td>
          <div className="name-col">
            <Tooltip title="symbol" placement="bottom-start">
              <p className="coin-symbol">{coin.symbol}</p>
            </Tooltip>
            <Tooltip title="name" placement="bottom-start">
              <p className="coin-name">{coin.name}</p>
            </Tooltip>
          </div>
        </td>
        {/* --- if price of chip is negative then use 2nd div with calssname chip-red  */}
        <Tooltip title="coin percentage change" placement="bottom-start">
          {coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex">
              <div className="price-chip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip td-icon">
                <TrendingUpIcon />
              </div>
            </td>
          ) : (
            <td className="chip-flex">
              <div className="price-chip chip-red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip red-icon-chip td-icon">
                <TrendingDownIcon />
              </div>
            </td>
          )}
        </Tooltip>

        <Tooltip title="Current price">
          {/* -- conditionally changing price color */}
          {coin.price_change_percentage_24h > 0 ? (
            <td className="info-container">
              <h3 className="coin-price td-center-align list-price">
                Rs {coin.current_price.toLocaleString()}
              </h3>
            </td>
          ) : (
            <td className="info-container">
              <h3 className="red-price td-center-align list-price">
                Rs {coin.current_price.toLocaleString()}
              </h3>
            </td>
          )}
        </Tooltip>

        <td>
          <Tooltip title="Total volume" placement="bottom-start">
            <p className="total_volume td-right-align td-total-volume">
              {coin.total_volume.toLocaleString()}
            </p>
          </Tooltip>
        </td>
        <td className="desktop-td-mkt">
          <Tooltip title="Market cap" placement="bottom-start">
            <p className="total_volume td-right-align">
              {coin.market_cap.toLocaleString()}
            </p>
          </Tooltip>
        </td>

        <td className="mobile-td-mkt">
          <Tooltip title="Market cap" placement="bottom-start">
            <p className="total_volume td-right-align">
              ${convertNumbers(coin.market_cap)}
            </p>
          </Tooltip>
        </td>
      </tr>
    </Link>
  );
};
5;
export default List;
