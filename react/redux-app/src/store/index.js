// configureStore
//
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./authSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authpersistConfig = {
  key: "auth", //로컬 스토리지 내 속성명(식별자)
  storage: storage,
  whitelist: ["token"],
};

const persistAuthReducer = persistReducer(authpersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: persistAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// persist
export const persistor = persistStore(store);
