import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  products: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // handle add to cart state
    addToCart: (state, action) => {
      const isExit = state.products.find(
        (product) => product.id === action.payload.id
      );
      // check this phone before added or not
      if (!isExit) {
        state.products.push({
          ...action.payload,
          quantity: action.payload.quantity + 1,
        });
      } else {
        toast.info("This phone already added....");
      }
    },
    // handle updated after including new items in cart array
    updateQuantity: (state, action) => {
      state.products.map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.type === "increment") {
            // validate isAvailable this phone if the avb. phone is less then 0
            if (product.available - product.quantity <= 0) {
              toast.warning("This phone is now unavailable");
            } else {
              product.quantity += 1;
            }
          } else if (action.payload.type === "decrement") {
            // validate the item less than 1
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
    // remove item from add to card
    removeFromCard: (state, action) => {
      state.products = state.products.filter(
        // match witch phone is remove from card array
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, updateQuantity, removeFromCard } = cartSlice.actions;

export default cartSlice.reducer;
