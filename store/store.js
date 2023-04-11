import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../app/GlobalRedux/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
