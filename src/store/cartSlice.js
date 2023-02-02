import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart(state, action) {
      const find = state.find((item) => {
        return item.siName !== action.payload.siName;
      });

      if (find) {
        if (
          window.confirm(
            "다른 음식점에서 이미 담은 메뉴가 있습니다. 담긴 메뉴를 취소하고 새로운 음식점에서 메뉴를 담을까요?"
          )
        ) {
          state.splice(0, state.length);
          state.push(action.payload);
          return;
        }
      } else {
        state.push(action.payload);
      }
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
