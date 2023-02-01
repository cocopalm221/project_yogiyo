import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userslice";
import Auth from "./Auth";


const store = configureStore({
  reducer: {
    userInfo: userSlice,
    authToken:Auth,
  },
});

export default store;