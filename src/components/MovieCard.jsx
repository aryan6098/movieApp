import React, { useEffect, useState } from "react";

const MovieCard = ({
  movieObj,
  addToWatchList,
  watchlist,
  removeWatchList,
}) => {
  const doesContain = () => {
    const isMovieContain = watchlist.find(
      (isMovie) => isMovie.id === movieObj.id
    );
    if (isMovieContain) {
      return true;
    }
    return false;
  };

  return (
    <div
      key={movieObj.id}
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110
    duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.poster_path})`,
      }}
    >
      {doesContain() ? (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-red-900/60"
          onClick={() => removeWatchList(movieObj)}
        >
          ❌
        </div>
      ) : (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg text-white bg-gray-900/60"
          onClick={() => addToWatchList(movieObj)}
        >
          <i className="fa fa-list" aria-hidden="true"></i>
        </div>
      )}
      <div className="text-white w-full text-center text-xl p-2 rounded-lg bg-gray-900/70">
        {movieObj.title}
      </div>
    </div>
  );
};

export default MovieCard;
