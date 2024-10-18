import { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

const WatchListContextWrapper = ({children}) => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
    if (moviesFromLocalStorage) {
      setWatchList(moviesFromLocalStorage);
    }
  }, []);

  const addToWatchList = (movieObj) => {
    const isMovieAlreadyInWatchList = watchList.find(
      (val) => val.id === movieObj.id
    );
    if (!isMovieAlreadyInWatchList) {
      const updateWatchList = [...watchList, movieObj];
      setWatchList(updateWatchList);
      localStorage.setItem("movies", JSON.stringify(updateWatchList));
    }
  };

  const removeWatchList = (movieObj) => {
    let filteredMovie = watchList.filter((movie) => movie.id !== movieObj.id);
    setWatchList(filteredMovie);
    localStorage.setItem("movies", JSON.stringify(filteredMovie));
  };

  return (
    <WatchListContext.Provider
      value={{ addToWatchList, removeWatchList, watchList, setWatchList}}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextWrapper;
