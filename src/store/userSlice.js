import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    data: null,
    error: false,
    loading: true,
    param: null,
  },
  reducers: {
    userLoading(state) {
      state.loading = false;
      state.error = false;
    },
    userError(state) {
      state.error = true;
      state.loading = false;
    },
    userData(state, action) {
      state.data = action.payload; 
      state.loading = false;
      state.error = false;
    },
  },
});

export const { userLoading, userError, userData } = userSlice.actions;
export default userSlice.reducer;
