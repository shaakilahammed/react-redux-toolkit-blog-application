import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'all',
  sort: 'default',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateSort(state, action) {
      state.sort = action.payload;
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { updateSort, updateFilter } = filtersSlice.actions;
