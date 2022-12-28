import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchItems } from './asyncAction';
import { Item, ItemSliceState, Status } from './types';

const initialState: ItemSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchItems.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;