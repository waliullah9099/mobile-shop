import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { baseApi } from "./api/api";

export const store = configureStore({
  reducer: {
    cart: cartReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
