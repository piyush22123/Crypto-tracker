import React from "react";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CoinPage from "./pages/Coin";
import Footer from "./components/Common/Footer/Footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coin/:id" element={<CoinPage />} />
            {/*<Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} /> */}
          </Routes>
        </BrowserRouter>
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default App;
