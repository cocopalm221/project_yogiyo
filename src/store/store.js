import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userslice";
import tokenReducer from './Auth';

const store = configureStore({
  reducer: {
    userInfo: userSlice,
    cart: cartSlice,
    authToken:tokenReducer,
  },
});

export default store;
