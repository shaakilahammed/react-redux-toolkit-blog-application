import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogs/blogsSlice';
import blogReducer from '../features/blog/blogSlice';

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
  },
});

export default store;
