import React from "react";
import { BiCart } from "react-icons/bi";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const navigate=useNavigate();
  const {cart}=useContext(cartContext);
  return (
    <div  onClick={()=>navigate("/cart")}
     className="flex flex-col items-center cursor-pointer hover:text-pink-600 transition">
      
      
    <div  className="relative cursor-pointer">
  <BiCart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />

  <span className="
    absolute
    -top-2
    -right-2
    bg-pink-600
    text-white
    text-[9px]
    min-w-4
    h-4
    px-1
    rounded-full
    flex
    items-center
    justify-center
  ">
    {cart.length}
  </span>
</div>
    </div>
  );
}