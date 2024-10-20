import axios from "axios";
import { bannerData, bannerError, bannerLoading } from "./bannerImageSlice";

export const bannerImageMiddleware = () => {
  return async (dispatch) => {
    try {
      dispatch(bannerLoading());
      axios
        .get(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=f53917176284f9516f5fe1073eb186b4"
        )
        .then((response) => {
          const firstMovie = response.data.results[0];
          const firstMovieTitle = firstMovie.title;
          const firstMoviePoster = firstMovie.poster_path;
          dispatch(
            bannerData({ title: firstMovieTitle, image: firstMoviePoster })
          );
        });
    } catch (err) {
      dispatch(bannerError());
    }
  };
};
