import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { baseApi } from "./api/api";

// Creating the Redux store using configureStore from Redux Toolkit
export const store = configureStore({
  // Reducers to manage state slices
  reducer: {
    // Managing shopping cart state using the cartReducer
    cart: cartReducer,
    // Integrating base API reducer for data handling
    [baseApi.reducerPath]: baseApi.reducer,
  },
  // Middleware configuration to enhance store functionality
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
