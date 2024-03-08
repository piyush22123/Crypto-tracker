import axios from "axios";

export const getCoinPrices = (id, days) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${Coinid}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
    )
    .then((response) => {
      console.log(response.data.prices);
      return response.data.prices;
    })
    .catch((error) => {
      console.log("error->", error);
    });
  return prices;
};
