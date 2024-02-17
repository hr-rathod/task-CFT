import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import currentPageReducer from './currentPageSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  currentPage: currentPageReducer,
});

export default rootReducer;
