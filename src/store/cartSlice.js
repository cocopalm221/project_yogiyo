import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart(state, action) {
      state.push(action.payload);
    },
    increment(state, action) {
      const index = state.findIndex((item) => item.key === action.payload);
      state[index].goodCount++;
      state[index].totalPrice = state[index].perPrice * state[index].goodCount;
    },
    decrement(state, action) {
      const index = state.findIndex((item) => item.key === action.payload);
      if (state[index].goodCount > 1) {
        state[index].goodCount--;
        state[index].totalPrice =
          state[index].perPrice * state[index].goodCount;
      }
    },
    onDelete(state, action) {
      const index = state.findIndex((item) => item.key === action.payload);
      state.splice(index, 1);
    },
    allDelete(state) {
      state.splice(0, state.length);
    },
  },
});

export const { addCart, increment, decrement, onDelete, allDelete } =
  cartSlice.actions;

export default cartSlice;
