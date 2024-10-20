import React, { useContext, useEffect, useState } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import { WatchListContext } from "../context/WatchListContext";
import { useDispatch, useSelector } from "react-redux";
import { handleNext, handlePrevious } from "../store/paginationSlice";
import { fetchMovieMiddleWare } from "../store/movieMiddleware";
const Movies = () => {
  const { pageNo } = useSelector((state) => state.pagination);
  const { movies, error, loading } = useSelector((state) => state.movie);
  const { addToWatchList, removeWatchList, watchList } =
    useContext(WatchListContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pageNo) {
      dispatch(fetchMovieMiddleWare(pageNo));
    }
  }, [pageNo]);

  const handleNextHandler = () => {
    dispatch(handleNext());
  };
  const handlePreviousHandler = () => {
    dispatch(handlePrevious());
  };

  if (loading) {
    return <h3>...Loading</h3>;
  }
  if (error) {
    return (
      <>
        <h3>Error occurred</h3>
      </>
    );
  }

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              addToWatchList={addToWatchList}
              watchlist={watchList}
              removeWatchList={removeWatchList}
            />
          );
        })}
      </div>
      <Pagination
        nextPageFn={handleNextHandler}
        previosuPageFn={handlePreviousHandler}
        pageNumber={pageNo}
      />
    </div>
  );
};

export default Movies;
