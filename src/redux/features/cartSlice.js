import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  products: [],
  selectedItem: 0,
  totalPrice: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExit = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!isExit) {
        state.products.push({
          ...action.payload,
          quantity: action.payload.quantity + 1,
        });
        // console.log(action);
      } else {
        toast.info("This phone already added....");
      }
    },
    updateQuantity: (state, action) => {
      // const products =
      state.products.map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.type === "increment") {
            if (product.available - product.quantity <= 0) {
              toast.warning("This phone is now unavailable");
            } else {
              product.quantity += 1;
            }
          } else if (action.payload.type === "decrement") {
            if (product.quantity <= 1) {
              toast.info("Less than 1 phone dosen't possible to order");
            } else {
              product.quantity -= 1;
            }
          }
        }
        return product;
      });
    },
    removeFromCard: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, updateQuantity, removeFromCard } = cartSlice.actions;

export default cartSlice.reducer;
