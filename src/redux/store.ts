import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import cartDataReducer from "./slices/CardData/CartDataSlice";
import authReducer from './slices/auth/authSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cartData: cartDataReducer,
    auth: authReducer,
  },
});

// Infer types for the RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
