// src/reducers/currentPageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = 1;

const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
