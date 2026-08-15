import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess({ dark }) {
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 rounded-2xl
      ${dark ? "bg-gray-950" : "bg-gray-100"}`}
    >
      <div
        className={`w-full max-w-md rounded-2xl shadow-lg p-8 text-center
        ${dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
      >
        <div className="text-5xl mb-4">✅</div>

        <h1
          className={`text-3xl font-bold
          ${dark ? "text-white" : "text-gray-900"}`}
        >
          Your Order Placed
        </h1>

        <p
          className={`mt-3
          ${dark ? "text-gray-400" : "text-gray-500"}`}
        >
          Thanks for shopping with us!
        </p>

        <button
          onClick={() => navigate("/products")}
          className={`mt-6 w-full text-white py-3 rounded-lg font-semibold transition duration-300
          ${
            dark
              ? "bg-pink-600 hover:bg-pink-700"
              : "bg-black hover:bg-pink-600"
          }`}
        >
          Continue Shopping
        </button>

        <button
          onClick={() => navigate("/orders")}
          className={`mt-6 w-full text-white py-3 rounded-lg font-semibold transition duration-300
          ${
            dark
              ? "bg-pink-600 hover:bg-pink-700"
              : "bg-black hover:bg-pink-600"
          }`}
        >
          View Orders
        </button>
      </div>
    </div>
  );
}
