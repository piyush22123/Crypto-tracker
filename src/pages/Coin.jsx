import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Common/Loader/Loader";
import axios from "axios";
import List from "../components/Dashboard/Lists/List";
import { coinObject } from "../functions/coinObjects";

const CoinPage = () => {
  const { Coinid } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();

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
    }
  }, [Coinid]);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="Coin-wrapper">
          <List coin={coinData} />
        </div>
      )}
    </>
  );
};

export default CoinPage;
