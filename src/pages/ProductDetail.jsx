import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";

export default function ProductDetail({ dark }) {
  const { addToCart } = useContext(cartContext);
  const [selC, setSelC] = useState("red");
  const { id } = useParams();
  const navigate = useNavigate();

  const productDetail = products.find((item) => item.id === Number(id));
  const col = productDetail.colors?.find((color) => color === selC);
  return (
    <div
      className={`min-h-screen px-3 py-3 transition-colors duration-300 rounded-2xl ${
        dark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className={`  mb-3
          flex
          items-center
          gap-1
         
          px-3
          py-1.5
          rounded-md
          hover:bg-pink-600
          transition
          text-xs ${dark ? "bg-white text-gray-700" : "bg-gray-700 text-white"}`}
      >
        ← Back
      </button>

      {/* Product Detail */}
      <div
        className={`
          max-w-4xl
          mx-auto
          rounded-xl
          shadow-md
          p-3
          md:p-4
          grid
          md:grid-cols-2
          gap-4
          ${dark ? "bg-gray-900 border border-gray-800" : "bg-white"}
        `}
      >
        {/* Image */}
        <div
          className={`overflow-hidden rounded-lg ${
            dark ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <img
            src={col?.image || productDetail.image}
            alt={col?.name || productDetail.name}
            loading="lazy"
            className="
    w-full
    h-[220px]
    md:h-[300px]
    object-cover
    hover:scale-105
    transition
  "
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <span
            className="
              w-fit
              bg-pink-100
              text-pink-600
              px-2
              py-0.5
              rounded-full
              text-[10px]
            "
          >
            {productDetail.category}
          </span>

          <h1
            className="
              text-xl
              md:text-2xl
              font-bold
              mt-2
            "
          >
            {productDetail.name}
          </h1>

          <p
            className={`text-xs mt-1 ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Brand:
            <span
              className={`font-semibold ml-1 ${
                dark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {productDetail.brand || "No Brand"}
            </span>
          </p>

          {/* Colors */}
          <div className="mt-4">
            <p
              className={`text-sm font-semibold mb-2 ${
                dark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Color:
              <span
                className={`ml-1 ${dark ? "text-gray-400" : "text-gray-500"}`}
              >
                {selC}
              </span>
            </p>

            {productDetail.colors?.length > 0 && (
              <div className="flex gap-3 mt-4">
                {productDetail.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelC(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selC === color
                        ? "border-black ring-2 ring-pink-200"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={color}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-1 mt-1">
            <span className="text-yellow-500 text-xs">★★★★★</span>

            <span
              className={`text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}
            >
              ({productDetail.rating})
            </span>
          </div>

          <div className="mt-2">
            {productDetail.discount > 0 && (
              <p className="text-gray-400 line-through text-xs">
                Rs {productDetail.price}
              </p>
            )}

            <p className="text-xl font-bold text-pink-600">
              Rs {productDetail.price}
            </p>

            {productDetail.discount > 0 && (
              <span
                className="
                  inline-block
                  mt-1
                  bg-red-500
                  text-white
                  text-[10px]
                  px-2
                  py-0.5
                  rounded-full
                "
              >
                {productDetail.discount}% OFF
              </span>
            )}
          </div>

          <p
            className={`text-xs mt-3 leading-relaxed ${
              dark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Premium quality product designed for comfort and modern fashion.
            Perfect choice for your daily style.
          </p>

          <button
            onClick={() => addToCart({ ...productDetail, col })}
            className={`
              mt-3
              py-2
              rounded-lg
              text-sm
              font-semibold
              hover:bg-pink-600
              transition
          ${dark ? "bg-white text-gray-700" : "bg-gray-700 text-white"}`}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
