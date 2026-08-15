import React, { createContext, useEffect, useState } from "react";

export const WishList = createContext();
export default function WishListProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
     catch {
  console.log("Failed to save wishlist to localStorage");
  } 
  }, [wishlist]);

  const addWishlist = (product) => {
    setWishlist((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };
  const removeWish = (product) => {
    setWishlist((item) => item.filter((prev) => prev.id !== product.id));
  };

  return (
    <WishList.Provider value={{ wishlist, addWishlist, removeWish }}>
      {children}
    </WishList.Provider>
  );
}
