import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";

export default function CheckOut({ dark }) {
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const { cart, setCart } = useContext(cartContext);

  const placeOrder = () => {
    if (!name.trim() || !mobile.trim() || !address.trim()) {
      alert("Plz fill all fields");
      return;
    }
    const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      id: Date.now(),
      items: cart,
      status: "pending",
    };
    localStorage.setItem("orders", JSON.stringify([...oldOrders, newOrder]));

    navigate("/orderSuccess");
    setCart([]);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-10 rounded-2xl
      ${dark ? "bg-gray-950" : "bg-gray-100"}`}
    >
      <div
        className={`w-full max-w-md p-6 rounded-2xl shadow-lg
        ${dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
      >
        <h1 className="text-2xl font-bold text-center mb-6">Checkout</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            placeOrder();
          }}
          className="space-y-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className={`w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500
            ${
              dark
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                : "bg-white border-gray-300 text-black"
            }`}
          />

          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Cell No"
            required
            className={`w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500
            ${
              dark
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                : "bg-white border-gray-300 text-black"
            }`}
          />

          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
            className={`w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500
            ${
              dark
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                : "bg-white border-gray-300 text-black"
            }`}
          />

          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold text-white transition
            ${dark ? "bg-pink-600 hover:bg-pink-700" : "bg-black hover:bg-pink-600"}`}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
