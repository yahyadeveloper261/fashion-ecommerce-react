import React from "react";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate=useNavigate();
  return (
    
    <div className="flex items-center justify-center" onClick={()=>navigate("/account")}>
      <div className="flex flex-col items-center cursor-pointer hover:text-pink-600 transition">
        
        <FiUser className="w-4 h-4 sm:w-5 sm:h-5" />

        <span className="text-[9px] sm:text-sm">
          Account
        </span>

      </div>
    </div>
  );
}