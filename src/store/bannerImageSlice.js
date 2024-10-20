import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
    name: "bannerImage",
    initialState :{
        loading: false,
        error: null,
        bannerImage: null,
        bannerImageTitle: null
    },
    reducers :{
        bannerLoading(state) {
            state.loading = true;
            state.error = false;
        },
        bannerError(state) {
            state.error = true;
            state.loading = false;
        },
        bannerData(state, action) {
            state.bannerImage = action.payload.image;
            state.bannerImageTitle = action.payload.title
            state.loading = false;
            state.error = false;
        }
    }
})

export default bannerSlice.reducer;
export const {bannerData, bannerError, bannerLoading} = bannerSlice.actions;