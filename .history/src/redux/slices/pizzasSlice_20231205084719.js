import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    seItems(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const { addItem, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
