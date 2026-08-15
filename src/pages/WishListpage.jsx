import React from "react";
import { WishList } from "../context/WishListContext";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

export default function WishListpage({ dark }) {
  const navigate = useNavigate();

  const { addToCart } = useContext(cartContext);
  const { wishlist, removeWish } = useContext(WishList);

  return (
    <div
      className={`min-h-screen px-4 py-8 rounded-2xl
      ${dark ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <div className="relative max-w-7xl mx-auto mb-8">
        <button
          onClick={() => navigate(-1)}
          className={`absolute left-0 top-1 px-3 py-2 rounded-lg
          text-xs font-semibold text-white transition
          ${dark ? "bg-pink-600 hover:bg-pink-700" : "bg-black hover:bg-pink-600"}`}
        >
          ← Back
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-center">
          My Wishlist ❤️
        </h1>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <p className={`text-lg ${dark ? "text-gray-400" : "text-gray-500"}`}>
            Your Wishlist is Empty 🤍
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl overflow-hidden shadow-md
              hover:shadow-xl hover:-translate-y-1
              transition-all duration-300
              ${dark ? "bg-gray-800" : "bg-white"}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-3">
                {/* Category */}
                <span
                  className={`text-[10px] px-2 py-1 rounded-full
                  ${
                    dark
                      ? "bg-pink-900/40 text-pink-400"
                      : "bg-pink-100 text-pink-600"
                  }`}
                >
                  {item.category}
                </span>

                {/* Name */}
                <h2
                  className={`text-sm font-semibold mt-2 line-clamp-1
                  ${dark ? "text-white" : "text-gray-900"}`}
                >
                  {item.name}
                </h2>

                {/* Brand */}
                <p
                  className={`text-xs mt-1
                  ${dark ? "text-gray-400" : "text-gray-500"}`}
                >
                  {item.brand || ""}
                </p>

                {/* Price */}
                <p className="text-lg font-bold text-pink-600 mt-2">
                  Rs{" "}
                  {item.discount > 0
                    ? Math.round(
                        item.price - (item.price * item.discount) / 100,
                      )
                    : item.price}
                </p>

                {/* Old Price */}
                {item.discount > 0 && (
                  <p className="text-xs text-gray-400 line-through">
                    Rs {item.price}
                  </p>
                )}

                {/* Buttons */}
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => addToCart(item)}
                    className={`flex-1 text-white py-2 rounded-lg
                    text-xs font-semibold transition
                    ${
                      dark
                        ? "bg-pink-600 hover:bg-pink-700"
                        : "bg-black hover:bg-pink-600"
                    }`}
                  >
                    Add To Cart
                  </button>

                  <button
                    onClick={() => removeWish(item)}
                    className={`px-3 py-2 border rounded-lg
                    text-xs transition
                    ${
                      dark
                        ? "border-red-400 text-red-400 hover:bg-red-900/30"
                        : "border-red-300 text-red-500 hover:bg-red-50"
                    }`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
