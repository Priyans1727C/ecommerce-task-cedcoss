import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../features/cart/cartSlice"
import orderReducer from "../features/orders/orderSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
  },
  devTools: true,
})