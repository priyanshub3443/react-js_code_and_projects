import { configureStore } from "@reduxjs/toolkit";
import tumorReducer from "../features/tumor/tumorSlice";

export const store = configureStore({
  reducer: {
    tumor: tumorReducer,
  },
});