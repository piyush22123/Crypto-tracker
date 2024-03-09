import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Common/Loader/Loader";
import axios from "axios";
import Header from "../components/Common/Header/Header";
import List from "../components/Dashboard/Lists/List";
import { coinObject } from "../functions/coinObject";
import Coininfo from "../components/Coin/CoinInfo/Coininfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart/LineChart";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays/SelectDays";
import { settingChartData } from "../functions/settingChartData";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(60);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getData();
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days);
      if (prices.length > 0) {
        console.log("hiih");

        setChartData({
          labels: prices.map((price) => {
            return convertDate(price[0]);
          }),
          datasets: [
            {
              label: "Dataset 1",
              data: prices.map((price) => {
                return new Date(price[1]);
              }),
              borderColor: "#3a80e9",
              borderWidth: 1,
              fill: true,
              tension: 0.25,
              backgroundColor: "rgba(58, 128, 233, 0.1)",
              pointRadius: 0,
            },
          ],
        });
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

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

          <div className="Coin-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <LineChart chartData={chartData} />
          </div>
          <Coininfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
};

export default CoinPage;
