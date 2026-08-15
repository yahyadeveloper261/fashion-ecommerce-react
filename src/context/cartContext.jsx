import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();
export default function CartProvider({ children }) {
  const del = (index) => {
    setCart((item) => item.filter((item, i) => i !== index));
  };
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {
      console.log("cant save");
    }
  }, [cart]);
  const increment = (index) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
      ),
    );
  };

  const decrement = (index) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: (item.quantity || 1) - 1 } : item,
      ),
    );
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find(
        (item) =>
          item.id === product.id && item.col?.name === product.col?.name,
      );

      if (exist) {
        return prev.map((item) =>
          item.id === product.id && item.col?.name === product.col?.name
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0,
  );

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        del,
        increment,
        decrement,
        grandTotal,
        addToCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
