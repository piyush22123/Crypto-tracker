import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header/Header'
import SelectCoins from '../components/Compare/SelectCoins/SelectCoins'
import SelectDays from '../components/Coin/SelectDays/SelectDays'
import { getCoinPrices } from '../functions/getCoinPrices'
import { getCoinData } from '../functions/getCoinData'
import { coinObject } from '../functions/coinObject'
import Loader from '../components/Common/Loader/Loader'
import { settingChartData } from '../functions/settingChartData'
import List from '../components/Dashboard/Lists/List'
import Coininfo from '../components/Coin/CoinInfo/Coininfo'
import LineChart from '../components/Coin/LineChart/LineChart'


const ComparePage = () => {
  const [crypto1, setCrypto1] = useState('');
  const [crypto2, setCrypto2] = useState('');
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  function handleDaysChange(event) {
    setDays(event.target.value);
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);

    if (data1) {
      coinObject(setCrypto1Data, data1);
    }
    if (data2) {
      coinObject(setCrypto2Data, data2);
    }
    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      settingChartData(setChartData, prices1, prices2)
      console.log("BOTH PRICES FETCHED", prices1, prices2);
      setIsLoading(false);
    }
  }





  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);

      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
    }
    else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }

    const prices1 = await getCoinPrices(crypto1, days, "prices");
    const prices2 = await getCoinPrices(crypto2, days, "prices");

    if(prices1.length > prices2.length) {
        settingChartData(setChartData, prices1, prices2);
        console.log("both prices fetched", prices1, prices2);
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
          <div className='coins-days-flex'>
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays 
              days={days} 
              handleDaysChange={handleDaysChange} 
              noPTag={true} />
          </div>
          <div className="Coin-wrapper" style={{ padding: "0rem 1rem"}}>
            <List coin={crypto1Data} />
          </div>
          <div className="Coin-wrapper" style={{ padding: "0rem 1rem"}}>
            <List coin={crypto2Data} />
          </div>
          <div className="Coin-wrapper">
            <LineChart chartData={chartData} />
          </div>

          <Coininfo heading={crypto1Data.name} desc={crypto1Data.desc}/>
          <Coininfo heading={crypto2Data.name} desc={crypto2Data.desc}/>
        </>
      )}
    </div>
  )
}
export default ComparePage
