import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userslice";

const store = configureStore({
  reducer: {
    userInfo: userSlice,
    cart: cartSlice,
  },
});

export default store;
