import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userslice";
import cartSlice from "./cartSlice";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const reducers = combineReducers({
  userInfo: userSlice.reducer,
  cart: cartSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["userInfo", "cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
