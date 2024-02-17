// src/reducers/postsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],  // Your posts data
    loading: false,
    currentPage: 1,
  },
  reducers: {
    setPosts: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    removePost: (state, action) => {
      const postIdToRemove = action.payload;
      state.data = state.data.filter(post => post.id !== postIdToRemove);
    },
  },
});

export const { setPosts, setCurrentPage, removePost } = postsSlice.actions;
export default postsSlice.reducer;
