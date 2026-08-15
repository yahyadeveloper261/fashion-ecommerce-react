import React, { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

export default function Cartpage({dark}) {
  const { cart, del, increment, decrement, grandTotal } =
    useContext(cartContext);

  const navigate = useNavigate();

  return (
     <div
      className={`min-h-screen w-full rounded-2xl ${
        dark
          ? "bg-gray-950 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Title */}
      

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm font-medium text-pink-500 uppercase tracking-wider">
              Shopping Bag
            </p>

            <h1 className={`text-3xl md:text-4xl font-extrabold ${dark?"text-white":"text-gray-800"}`}>
              My Cart
            </h1>

            <p className={`text-gray-500 dark:text-gray-400 mt-1 ${dark?"text-white":"text-gray-800"}`}>
              {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="
              group
              flex items-center gap-2
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              text-gray-700 dark:text-gray-200
              font-semibold
              rounded-full
              px-5 py-2.5
              shadow-sm
              hover:shadow-md
              hover:bg-gray-50 dark:hover:bg-gray-700
              hover:-translate-x-1
              transition-all duration-200
            "
          >
            <span className="text-lg">←</span>
            Go back
          </button>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div
            className="
              bg-white/80 dark:bg-gray-800/80
              backdrop-blur
              rounded-3xl
              border border-gray-100 dark:border-gray-700
              shadow-lg
              text-center
              py-24
              px-6
            "
          >
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
              <span className="text-4xl">🛒</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Your cart is empty
            </h2>

            <p className="text-gray-500 dark:text-gray-400">
              Add some products to your cart and they will appear here.
            </p>
          </div>
        ) : (

          /* Cart Items */
          <div className="grid lg:grid-cols-3 gap-6">

            {/* Products */}
            <div className="lg:col-span-2 space-y-4">

              {cart.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    flex
                    flex-col sm:flex-row
                    items-center
                    gap-5
                    p-5
                    bg-white dark:bg-gray-800
                    rounded-2xl
                    border border-gray-100 dark:border-gray-700
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-0.5
                    transition-all duration-300
                  "
                >

                  {/* Product Image */}
                  <div className="relative shrink-0">
                    <img
                      src={item.col?.image || item.image}
                      alt={item.name}
                      className="
                        w-28 h-28
                        object-cover
                        rounded-2xl
                        bg-gray-100 dark:bg-gray-700
                        shadow-sm
                        group-hover:scale-105
                        transition-transform duration-300
                      "
                    />

                    <span
                      className="
                        absolute -top-2 -right-2
                        w-7 h-7
                        flex items-center justify-center
                        rounded-full
                        bg-pink-600
                        text-white
                        text-xs
                        font-bold
                        shadow-md
                      "
                    >
                      {item.quantity || 1}
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 w-full">

                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                          {item.name}
                        </h2>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Category:{" "}
                          <span className="font-medium text-gray-700 dark:text-gray-200">
                            {item.category}
                          </span>
                        </p>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Color:{" "}
                          <span className="font-medium text-gray-700 dark:text-gray-200">
                            {item.col?.name || "Default"}
                          </span>
                        </p>
                      </div>

                      <p className="text-xl font-extrabold text-pink-600 whitespace-nowrap">
                        Rs {item.price * (item.quantity || 1)}
                      </p>
                    </div>

                    {/* Quantity + Delete */}
                    <div className="flex items-center justify-between mt-5">

                      <div
                        className="
                          inline-flex
                          items-center
                          bg-gray-100 dark:bg-gray-700
                          rounded-xl
                          p-1
                          border border-gray-200 dark:border-gray-600
                        "
                      >
                        <button
                          onClick={() => decrement(index)}
                          disabled={item.quantity === 1}
                          className="
                            w-9 h-9
                            rounded-lg
                            bg-white dark:bg-gray-800
                            text-gray-700 dark:text-gray-200
                            font-bold
                            text-lg
                            shadow-sm
                            hover:bg-pink-50 dark:hover:bg-pink-900/30
                            hover:text-pink-600
                            disabled:opacity-40
                            disabled:cursor-not-allowed
                            transition
                          "
                        >
                          −
                        </button>

                        <span className="w-10 text-center font-bold text-gray-800 dark:text-white">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increment(index)}
                          className="
                            w-9 h-9
                            rounded-lg
                            bg-pink-600
                            text-white
                            font-bold
                            text-lg
                            shadow-sm
                            hover:bg-pink-700
                            active:scale-95
                            transition
                          "
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => del(index)}
                        className="
                          flex items-center gap-1.5
                          text-sm
                          font-semibold
                          text-red-500
                          hover:text-red-700
                          hover:bg-red-50 dark:hover:bg-red-900/20
                          px-3 py-2
                          rounded-lg
                          transition
                        "
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div
                className="
                  sticky top-6
                  bg-white dark:bg-gray-800
                  rounded-2xl
                  border border-gray-100 dark:border-gray-700
                  shadow-xl
                  p-6
                "
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h2>

                <div className="flex justify-between text-gray-500 dark:text-gray-400 mb-3">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Rs {grandTotal}
                  </span>
                </div>

                <div className="flex justify-between text-gray-500 dark:text-gray-400 mb-4">
                  <span>Delivery</span>
                  <span className="font-medium text-green-600">
                    Free
                  </span>
                </div>

                <div className="border-t border-dashed border-gray-200 dark:border-gray-700 my-5"></div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    Grand Total
                  </span>

                  <span className="text-2xl font-extrabold text-pink-600">
                    Rs {grandTotal}
                  </span>
                </div>

                <button
                  className="
                    w-full
                    mt-6
                    py-3.5
                    rounded-xl
                    bg-gradient-to-r
                    from-pink-600
                    to-purple-600
                    text-white
                    font-bold
                    shadow-lg
                    shadow-pink-200
                    hover:from-pink-700
                    hover:to-purple-700
                    hover:shadow-xl
                    active:scale-[0.98]
                    transition-all duration-200
                  "
                  onClick={() => navigate("/checkOut")}
                >
                  Proceed to Checkout →
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}