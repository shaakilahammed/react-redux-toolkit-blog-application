import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getBlogs from './blogsAPI';

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: '',
};

export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async ({ filter, sort }) => {
    const blogs = await getBlogs(filter, sort);
    return blogs;
  }
);

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default blogsSlice.reducer;
