import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBlog, updateBookmark, updateLikes } from './blogAPI';

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  isUpdating: false,
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

export const changeLikes = createAsyncThunk(
  'blog/liked',
  async ({ id, likes }) => {
    const blog = await updateLikes(id, likes);
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
        state.blog = {};
        state.isError = true;
        state.error = action.error?.message;
      });
    builder
      .addCase(changeBookmark.pending, (state) => {
        state.isUpdating = true;
        state.isError = false;
      })
      .addCase(changeBookmark.fulfilled, (state, action) => {
        state.isUpdating = false;
        state.blog.isSaved = action.payload.isSaved;
      })
      .addCase(changeBookmark.rejected, (state, action) => {
        state.isUpdating = false;
        state.isError = true;
        state.error = action.error?.message;
      });

    builder
      .addCase(changeLikes.pending, (state) => {
        state.isUpdating = true;
        state.isError = false;
      })
      .addCase(changeLikes.fulfilled, (state, action) => {
        state.isUpdating = false;
        state.blog.likes = action.payload.likes;
      })
      .addCase(changeLikes.rejected, (state, action) => {
        state.isUpdating = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default blogSlice.reducer;
