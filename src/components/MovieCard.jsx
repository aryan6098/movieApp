import React, { useEffect, useState } from "react";

const MovieCard = ({ movieObj, addToWatchList, watchlist , removeWatchList}) => {

const doesContain = () => {
    const isMovieContain = watchlist.find((isMovie) => isMovie.id === movieObj.id)
    if(isMovieContain) {
        return true;
    }
    return false;
}
  return (
    <div key={movieObj.id}
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`,
      }}
    >
     
      {doesContain() ? <div onClick={()=>removeWatchList(movieObj)}>❌</div> : (
         <div
         className="m-3 flex justify-end items-end h-8 w-8"
         onClick={() => addToWatchList(movieObj)}
       >
         😍
       </div>
      )}
      <div className="text-white text-center w-full text-2xl p-2 rounded-lg bg-gray-900/70 ">
        {movieObj.title}
      </div>
    </div>
  );
};

export default MovieCard;
