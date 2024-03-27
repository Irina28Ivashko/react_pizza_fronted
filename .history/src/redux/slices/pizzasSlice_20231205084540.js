import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {},
  },
});

export const { addItem, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
