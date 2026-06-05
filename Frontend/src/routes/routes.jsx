import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductList from "../features/products/ProductList";
import ProductDetails from "../features/products/ProductDetails";
import CartPage from "../features/cart/CartPage";
import Checkout from "../features/checkout/Checkout";
import Orders from "../features/orders/Orders";

function AppRoutes() {
  return (

    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
         <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
         <Route path="/orders" element={<Orders />} />
      </Route>
    </Routes>

  );

}

export default AppRoutes;