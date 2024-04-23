import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/counterSlice";
import cartReducer from "./features/cartSlice";
import { baseApi } from "./api/api";

export const store = configureStore({
  reducer: {
    count: countReducer,

    cart: cartReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
