import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Common/Header/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import Search from "../components/Dashboard/search/Search";
import PaginationComponent from "../components/pagination/PaginationComponent";
import Loader from "../components/Common/Loader/Loader";
import { get100Coins } from "../functions/get100Coins";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // filter coins based on search data and to avoid case sensitive we make entered data to lowercase
  // filter based on coin name or symbol
  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase()),
  );

  // fetching data using axios because its better and return data in json itself
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const data = await get100Coins();
    if (data) {
      setCoins(data);
      setPaginatedCoins(data.slice(0, 10));
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
