import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],

  reducers: {
    addToCart: (state, action) => {
      const { id, qty } = action.payload;
      const existing = state.find((item) => item.productId === id);

      if (existing) {
        existing.qty += qty;
      } else {
        state.push({
          productId: id,
          qty,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    updateCartItem: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.find((item) => item.productId === id);

      if (item) {
        item.qty = qty;
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      // FIX: Return the filtered array directly so Redux Toolkit updates correctly
      const newState = state.filter((item) => item.productId !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },

    clearCart: () => {
      // FIX: Return a clean empty array to completely reset the state
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    },
  },
});

export const {
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;