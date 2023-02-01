import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userslice";
import cartSlice from "./cartSlice";
import tokenReducer from './Auth';


const store = configureStore({
  reducer: {
    userInfo: userSlice,
    cart: cartSlice,
    authToken:tokenReducer,
  },
});

export default store;