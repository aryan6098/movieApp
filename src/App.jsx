import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import { Routes, Route } from "react-router-dom";
import WatchListContextWrapper from "./context/WatchListContext";
function App() {
  return (
    <>
      <Navbar />
      <WatchListContextWrapper>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
        </Routes>
      </WatchListContextWrapper>
    </>
  );
}

export default App;
