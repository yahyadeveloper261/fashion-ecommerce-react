import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CategoryMenu from "./components/CategoryMenu/CategoryMenu";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Accessories from "./pages/Accessories";
import NewArrivals from "./pages/NewArrivals";
import BestSellers from "./pages/BestSellers";
import Sales from "./pages/Sales";
import Brands from "./pages/Brands";
import ScrollToTop from "./components/CategoryMenu/ScrollToTop";
import Cartpage from "./pages/Cartpage";
import CheckOut from "./pages/CheckOut";
import OrderSuccess from "./pages/OrderSuccess";
import WishListpage from "./pages/WishListpage";
import Account from "./pages/Account";
import Orders from "./pages/Order";

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("dark")) || false;
    } catch {
      return false;
    }
  });
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow-md">
        <Navbar dark={dark} setDark={setDark} />
        <CategoryMenu dark={dark} />
      </div>
      <div className="pt-40 mx-5">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home dark={dark} />} />
          <Route path="/products" element={<Products dark={dark} />} />
          <Route path="/product/:id" element={<ProductDetail dark={dark} />} />
          <Route path="/men" element={<Men dark={dark} />} />
          <Route path="/men/:subCategory" element={<Men dark={dark} />} />
          <Route path="/women" element={<Women dark={dark} />} />
          <Route path="/women/:subCategory" element={<Women dark={dark} />} />
          <Route path="/kids" element={<Kids dark={dark} />} />
          <Route path="/kids/:subCategory" element={<Kids dark={dark} />} />
          <Route path="/accessories" element={<Accessories dark={dark} />} />
          <Route
            path="/accessories/:subCategory"
            element={<Accessories dark={dark} />}
          />
          <Route path="/newArrivals" element={<NewArrivals dark={dark} />} />
          <Route path="/bestSellers" element={<BestSellers dark={dark} />} />
          <Route path="/sales" element={<Sales dark={dark} />} />
          <Route path="/brands" element={<Brands dark={dark} />} />
          <Route path="/cart" element={<Cartpage dark={dark} />} />
          <Route path="/checkOut" element={<CheckOut dark={dark} />} />
          <Route path="/orderSuccess" element={<OrderSuccess dark={dark} />} />
          <Route path="/wishlist" element={<WishListpage dark={dark} />} />
          <Route path="/account" element={<Account dark={dark} />} />
          <Route path="/orders" element={<Orders dark={dark} />} />
        </Routes>
      </div>
    </>
  );
}
