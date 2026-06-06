import { createSlice } from "@reduxjs/toolkit";
import { MOCK_ORDERS } from "../../data/cart";

const orderSlice = createSlice({
  name: "orders",
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

      state.unshift(order);

      localStorage.setItem(
        "orders",
        JSON.stringify(state)
      );

   
      return state;
    },

    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload;

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