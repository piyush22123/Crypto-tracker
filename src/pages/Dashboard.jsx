import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Common/Header/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import Search from '../components/Dashboard/search/Search'


const Dashboard = () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  
  // filter coins based on search data and to avoid case sensitive we make entered data to lowercase
  // filter based on coin name or symbol
  var filteredCoins = coins.filter((item) => 
    item.name.toLowerCase().includes(search.toLowerCase())
    || item.symbol.toLowerCase().includes(search.toLowerCase())
  );


  // fetching data using axios because its better and return data in json itself
  useEffect(() => {
    
    axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        )
        .then((response) => {
          console.log("response->", response);
          setCoins(response.data);
        })
        .catch((error) => {
          console.log("error->", error);
        })
  }, []);




  return (
    <>
    <Header/>
    <Search search = {search} onSearchChange={onSearchChange}/>
    <TabsComponent coins={filteredCoins}/>
    </>
  )
}

export default Dashboard