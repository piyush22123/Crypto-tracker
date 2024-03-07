import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Common/Loader/Loader";
import axios from "axios";
import Header from "../components/Common/Header/Header";
import List from "../components/Dashboard/Lists/List";
import { coinObject } from "../functions/coinObject";
import Coininfo from "../components/Coin/CoinInfo/Coininfo";

const CoinPage = () => {
  const { Coinid } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);

  useEffect(() => {
    if (Coinid) {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${Coinid}`)
        .then((response) => {
          console.log("response->", response);
          coinObject(setCoinData, response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("error->", error);
          setIsLoading(false);
        });

      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${Coinid}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
        )
        .then((response) => {
          console.log("prices->", response.data.prices);
        })
        .catch((error) => {
          console.log("error->", error);
          setIsLoading(false);
        });
    }
  }, [Coinid]);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="Coin-wrapper">
            <List coin={coinData} />
          </div>
          <Coininfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
};

export default CoinPage;
