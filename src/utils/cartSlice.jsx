import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    removeItemAtIndex: (state, action, i) => {
      state.items.splice(action.payload, 1);
    },
  },
});

export const { addItem, removeItem, clearCart, removeItemAtIndex } =
  cartSlice.actions;

export default cartSlice.reducer;
