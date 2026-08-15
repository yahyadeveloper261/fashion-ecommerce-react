import { useNavigate } from "react-router-dom";
import { WishList } from "../../context/WishListContext";

import { useContext } from "react";
export default function ProductCard({ product }) {
  const navigate=useNavigate();
  const {wishlist,addWishlist}=useContext(WishList);

  return (
    <div  
      className="
        mt-3 mb-4
        group
        bg-white
        rounded-xl
        overflow-hidden
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        cursor-pointer
        "
        onClick={()=>navigate(`/product/${product.id}`)}
        >

    

      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100" >
      <button
    onClick={(e) => {
      e.stopPropagation();
      addWishlist(product);
    }}
    className="
      absolute
      top-2
      right-2
      z-20
      w-7
      h-7
      rounded-full
      bg-white
      shadow-md
      flex
      items-center
      justify-center
      text-base
      hover:scale-110
      hover:shadow-lg
      transition-all
      duration-200
    "
  >
    {wishlist.some(item => item.id === product.id)
      ? "❤️"
      : "🤍"}
  </button>

        {/* NEW Badge */}
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-[9px] px-2 py-0.5 rounded-full z-10">
            NEW
          </span>
        )}

        {/* BEST SELLER Badge */}
       {product.bestSeller && (
  <span className="absolute bottom-2 right-2 bg-orange-500 text-white text-[9px] px-2 py-0.5 rounded-full z-10">
    BEST
  </span>
)}

        {/* Discount Badge */}
        {product.discount > 0 && (
          <span className="absolute bottom-2 left-2 bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full z-10">
            -{product.discount}%
          </span>
        )}

      <img
  src={product.image}
  alt={product.name}
  loading="lazy"
  className="
    w-full
    h-36
    object-cover
    transition-transform
    duration-500
    group-hover:scale-105
  "
/>
      </div>

      {/* Content */}
      <div className="p-2.5 flex flex-col h-36">

        {/* Category */}
        <span className="inline-block text-[9px] bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full w-fit">
          {product.category}
        </span>

        {/* Brand */}
        <p className="text-[10px] text-gray-500 mt-1 h-3">
          {product.brand || ""}
        </p>

        {/* Name */}
        <h2 className="mt-2 text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-pink-600 transition-colors">
          {product.name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-500 text-[10px]">★★★★★</span>
          <span className="text-[10px] text-gray-500">
            ({product.rating})
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-auto">
          <div className="h-10 flex flex-col justify-center">
            {product.discount > 0 && (
              <p className="text-[10px] text-gray-400 line-through leading-none">
                Rs {product.price}
              </p>
            )}

            <p
              className={`text-base font-bold ${
                product.discount > 0 ? "text-red-600" : "text-gray-900"
              }`}
            >
              Rs{" "}
              {product.discount > 0
                ? Math.round(
                    product.price -
                      (product.price * product.discount) / 100
                  )
                : product.price}
            </p>
          </div>

          <button
            className="
              bg-black
              text-white
              text-[11px]
              px-2.5
              py-1.5
              rounded-md
              hover:bg-pink-600
              transition
            "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}