import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userslice";


const store = configureStore({
  reducer: {
    userInfo: userSlice,
  },
});

export default store;