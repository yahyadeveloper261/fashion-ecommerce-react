import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartProvider from "./context/cartContext";
import WishListProvider from "./context/WishListContext";
import SearchProvider from "./context/SearchContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishListProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </WishListProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
