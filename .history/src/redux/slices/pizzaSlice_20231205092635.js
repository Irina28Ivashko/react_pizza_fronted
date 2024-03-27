import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchPizzas = createAsyncThunk("pizza/fetchPizzasStatus", async () => {
  const { data } = await axios.get(
    `https://6567f9d69927836bd973f5c2.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
  );

  return data;
});

const initialState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
