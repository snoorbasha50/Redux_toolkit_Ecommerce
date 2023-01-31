import { configureStore } from "@reduxjs/toolkit";
import getProductsReducer from "./getSlice";

export default configureStore({
  reducer: {
    web: getProductsReducer,
  },
});
