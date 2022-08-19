import { configureStore } from "@reduxjs/toolkit";
import themeToggleReducer from "../features/themeToggleSlice";

let initialState = {};

const store = configureStore({
  reducer: {
    theme: themeToggleReducer,
  },
});
export default store;
