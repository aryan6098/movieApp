import { useContext, useEffect, useState } from "react";
import genreids from "../constants";
import { WatchListContext } from "../context/WatchListContext";
function WatchList() {
  const {watchList, setWatchList} = useContext(WatchListContext);
  // const [watchList, setWatchList] = useState([]);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([
    "All Genres",
    "Thriller",
    "Action",
  ]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  useEffect(() => {
    const moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
    if (moviesFromLocalStorage) {
      setWatchList(moviesFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    let temp = watchList.map((movie) => {
      return genreids[movie.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchList]);

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const genre = (genre_id) => {
    return genreids[genre_id];
  };

  const handleAscendingRating = () => {
    const sortAscending = watchList.sort((movieObjA, movieObjB) => {
      return movieObjA.vote_average - movieObjB.vote_average;
    });
    setWatchList([...sortAscending]);
  };

  const handleDescendingRating = () => {
    const sortAscending = watchList.sort((movieObjA, movieObjB) => {
      return movieObjB.vote_average - movieObjA.vote_average;
    });
    setWatchList([...sortAscending]);
  };
  const Genre = () => {
    return (
      <div className="flex justify-center m-4">
        {genreList.map((genre, index) => {
          const isActive = currGenre === genre;
          const baseStyles =
            "flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-4";
          const bgColor = isActive ? "bg-blue-400" : "bg-gray-400/50";
          return (
            <div
            key={index}
              onClick={() => handleFilter(genre)}
              className={`${baseStyles} ${bgColor}`}
            >
              {genre}
            </div>
          );
        })}
      </div>
    );
  };

  const filteredMovie = () => {
    return watchList
      .filter((movie) => {
        if (currGenre == "All Genres") {
          return true;
        } else {
          return genreids[movie.genre_ids[0]] == currGenre;
        }
      })
      .filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase());
      });
  };
  return (
    <>
      <Genre />
      <div className="flex justify-center my-10">
        <input
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border
border-gray-300"
          type="text"
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table
          className="w-full border-collapse bg-white text-left text-sm
    text-gray-500"
        >
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <div>
                    <i
                      className="fa-solid fa-arrow-up mx-1 hover:cursor-pointer"
                      onClick={handleAscendingRating}
                    ></i>
                    Ratings{" "}
                    <i
                      className="fa-solid fa-arrow-down mx-1 hover:cursor-pointer"
                      onClick={handleDescendingRating}
                    ></i>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {filteredMovie().map((movie) => {
              return (
                <tr className="hover:bg-gray-50" key={movie.id}>
                  <td className="flex items-center px-6 py-4 font-normal text-gray-900 gap-4">
                    <img
                      className="h-[6rem] w-[10rem] object-fit object-cover rounded-r-lg"
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt=""
                    />
                    <div className="font-medium text-gray-700 text-sm">
                      {movie.title}
                    </div>
                  </td>
                  <td className="pl-6 py-4">{movie.vote_average}</td>
                  <td className="pl-6 py-4">{movie.popularity}</td>
                  <td className="pl-2 py-4">{genre(movie.genre_ids[0])}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default WatchList;
