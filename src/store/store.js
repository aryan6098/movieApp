import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./paginationSlice"
import movieReducer  from "./movieSlice"
import bannerReducer from "./bannerImageSlice"
const store = configureStore({
    reducer :{
        pagination : paginationReducer,
        movie: movieReducer,
        bannerData: bannerReducer
    }
})

export default store;