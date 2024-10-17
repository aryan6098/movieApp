import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import axios from "axios";

const Movies = () => {
  const [pageNo, setPageNo] = useState(1);
  const [movies, setMovies] = useState([]);
    const [watchlist, setWatchList] = useState([]);
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=f53917176284f9516f5fe1073eb186b4&language=en-US&page=${pageNo}`)
    .then((response)=>{
        setMovies(response.data.results)
    })
  },[pageNo])

  useEffect(() => {
    const moviesFromLocalStorage =  JSON.parse(localStorage.getItem("movies"));
    if(moviesFromLocalStorage) {
     setWatchList(moviesFromLocalStorage);
    }
  },[])
  const addToWatchList = (movieObj) =>{
   const isMovieAlreadyInWatchList =  watchlist.find((val)=> val.id === movieObj.id)
    if(!isMovieAlreadyInWatchList) {
        const updateWatchList = [...watchlist, movieObj];
        setWatchList(updateWatchList);
        localStorage.setItem("movies",JSON.stringify(updateWatchList))
    }
    
  }
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrevious = () => {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const removeWatchList = (movieObj) => {
    let filteredMovie = watchlist.filter((movie) => movie.id !== movieObj.id)
    setWatchList(filteredMovie);
    localStorage.setItem("movies",JSON.stringify(filteredMovie))
  }

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard key ={movieObj.id} movieObj={movieObj} addToWatchList ={addToWatchList} watchlist ={watchlist} removeWatchList={removeWatchList}/>
          );
        })}
      </div>
      <Pagination
        nextPageFn={handleNext}
        previosuPageFn={handlePrevious}
        pageNumber={pageNo}
      />
    </div>
  );
};

export default Movies;
