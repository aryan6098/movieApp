import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: { pageNo: 1 },
  reducers: {
    handleNext(state) {
      state.pageNo += 1;
    },
    handlePrevious(state) {
      if (state.pageNo == 1) {
        return;
      }
      state.pageNo -= 1;
    },
  },
});

export default paginationSlice.reducer;
export const { handleNext, handlePrevious } = paginationSlice.actions;