import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBlog, updateBookmark } from './blogAPI';

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: '',
};

export const fetchBlog = createAsyncThunk('blog/fetchBlog', async (id) => {
  const blog = await getBlog(id);
  return blog;
});

export const changeBookmark = createAsyncThunk(
  'blog/changeBookmark',
  async ({ id, isSaved }) => {
    const blog = await updateBookmark(id, isSaved);
    return blog;
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
        state.isError = true;
        state.error = action.error?.message;
      });
    builder.addCase(changeBookmark.fulfilled, (state, action) => {
      state.blog.isSaved = action.payload.isSaved;
    });
  },
});

export default blogSlice.reducer;
