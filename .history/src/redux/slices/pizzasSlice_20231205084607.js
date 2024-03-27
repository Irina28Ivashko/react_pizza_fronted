import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addItem(state, action) {},
  },
});

export const { addItem, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
