import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogs/blogsSlice';
import blogReducer from '../features/blog/blogSlice';
import relatedBlogsReducer from '../features/relatedBlogs/relatedBlogsSlice';
import filtersReducer from '../features/filters/filtersSlice';

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogsReducer,
    filters: filtersReducer,
  },
});

export default store;
