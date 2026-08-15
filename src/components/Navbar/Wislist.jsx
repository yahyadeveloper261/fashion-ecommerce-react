import React from "react";
import { HiHeart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { WishList } from "../../context/WishListContext";
import { useContext } from "react";

export default function Wislist() {
  const navigate = useNavigate();

  const { wishlist } = useContext(WishList);

  return (
    <div
      onClick={() => navigate("/wishlist")}
      className="
        relative
        flex
        flex-col
        items-center
        cursor-pointer
        hover:text-pink-600
        transition
      "
    >
      {/* Heart + Count */}
      <div className="relative">
        <HiHeart
          className="
            w-5 h-5
            sm:w-6 sm:h-6
            md:w-6 md:h-6
          "
        />

        {/* Count Badge */}
        {wishlist.length > 0 && (
          <span
            className="
              absolute
              -top-2
              -right-2
              bg-pink-600
              text-white
              text-[8px]
              font-bold
              min-w-4
              h-4
              px-1
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            {wishlist.length}
          </span>
        )}
      </div>

      <span className="text-[9px] sm:text-xs md:text-sm mt-1">Wishlist</span>
    </div>
  );
}
