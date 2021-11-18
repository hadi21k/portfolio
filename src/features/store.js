import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/reducer";

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;
