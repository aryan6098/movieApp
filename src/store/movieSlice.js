import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: null,
    loading: true,
    error: false,
  },
  reducers: {
    movieLoading(state) {
      state.loading = true;
      state.error = false;
    },
    movieError(state) {
      state.error = true;
      state.loading = false;
    },
    movieData(state, action) {
        state.loading = false;
        state.error = false;
        state.movies = action.payload
    },
  },
});
export default movieSlice.reducer;
export const { movieData, movieLoading, movieError } = movieSlice.actions;
