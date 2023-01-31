import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userslice";
import tokenReducer from './Auth';


const store = configureStore({
  reducer: {
    userInfo: userSlice,
    authToken:tokenReducer,
  },
});

export default store;