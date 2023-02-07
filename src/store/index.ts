import { configureStore } from "@reduxjs/toolkit";
import authenticateSlice from "./authenticateSlice";
import counterSlice from "./counterSlice";
import loginSlice from "./loginSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    showCounter: counterSlice,
    login: loginSlice,
    authenticate: authenticateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
