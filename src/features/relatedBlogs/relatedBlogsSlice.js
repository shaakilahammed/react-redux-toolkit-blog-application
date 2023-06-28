import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getRelatedBlogs from './releatedBlogsAPI';

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: '',
};

export const fetchRelatedBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async ({ currentBlogId, tags }) => {
    const blogs = await getRelatedBlogs(currentBlogId, tags);
    return blogs;
  }
);

const relatedBlogsSlice = createSlice({
  name: 'relatedBlogs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedBlogsSlice.reducer;
