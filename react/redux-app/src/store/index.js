// configureStore
//
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./authSlice.js"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
});
