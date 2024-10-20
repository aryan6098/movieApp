import axios from "axios";
import { movieData, movieError, movieLoading } from "./movieSlice";

export const fetchMovieMiddleWare = (pageNo) => {
  return async (dispatch) => {
    try {
      dispatch(movieLoading());
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=f53917176284f9516f5fe1073eb186b4&language=en-US&page=${pageNo}`
        )
        .then((response) => {
          dispatch(movieData(response.data.results));
        });
    } catch (err) {
      dispatch(movieError());
    }
  };
};
