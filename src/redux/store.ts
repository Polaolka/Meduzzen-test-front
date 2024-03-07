import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";
import { chatReducer } from "./chat/chatSlice";
import { loadingReducer } from "./loader/slice";
import { generalReducer } from "./general/slice";
import { modalOpenedReducer } from "./modalOpenedSlice";
import { userReducer } from "./user/slice";
import authSlice from "./auth/authSlice";
import persistReducer from "redux-persist/es/persistReducer";


const authPersistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);

const rootReducer = {
  auth: persistedAuthReducer,
  chat: chatReducer,
  loading: loadingReducer,
  general: generalReducer,
  modal: modalOpenedReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
