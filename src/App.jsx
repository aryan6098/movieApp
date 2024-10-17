import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/watchlist" element={<WatchList />}></Route>
      </Routes>
    </>
  );
}

export default App;
