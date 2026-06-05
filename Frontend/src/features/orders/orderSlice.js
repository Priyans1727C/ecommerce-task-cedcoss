import { createSlice } from "@reduxjs/toolkit";
import { MOCK_ORDERS } from "../../data/cart";

const orderSlice = createSlice({
  name: "orders",
  // initialState is a direct Array structure
  initialState: JSON.parse(localStorage.getItem("orders")) || MOCK_ORDERS,

  reducers: {
    placeOrder: (state, action) => {
      const id = `PO-2026-${Math.floor(
        Math.random() * 90000 + 10000
      )}`;

      const order = {
        ...action.payload,
        id,
        date: new Date().toISOString().slice(0, 10),
        status: "Processing",
      };

      // FIX: 'state' is the array itself. Unshift directly onto it.
      state.unshift(order);

      localStorage.setItem(
        "orders",
        JSON.stringify(state)
      );

      // In Redux Toolkit / Immer, we return the newly generated item 
      // if we want to read it from the dispatch response, or just mutate.
      return state;
    },

    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload;

      // FIX: Find directly within 'state' array
      const order = state.find(
        (o) => o.id === id
      );

      if (order) {
        order.status = status;
      }

      localStorage.setItem(
        "orders",
        JSON.stringify(state)
      );
    },

    clearOrders: () => {
      localStorage.setItem("orders", "[]");
      // FIX: Safely reset the array state by returning an empty array
      return [];
    },
  },
});

export const {
  placeOrder,
  updateOrderStatus,
  clearOrders,
} = orderSlice.actions;

export default orderSlice.reducer;