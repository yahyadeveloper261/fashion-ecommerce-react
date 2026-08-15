import React from 'react'
import { NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function CategoryMenu({dark}) {
    const navigate = useNavigate()
  return (
  <div className="hidden md:flex justify-center gap-10 py-3">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-pink-600 border-b-2 border-pink-600 pb-1"
            : "text-gray-700 pb-1"
        }
      >
        Home
      </NavLink>


      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "text-pink-600 border-b-2 border-pink-600 pb-1"
            : "text-gray-700 pb-1"
        }
      >
        ShopNow
      </NavLink>
    
<select
  onChange={(e) => navigate(e.target.value)}
  defaultValue=""
  className="
    w-36
    bg-white
    border border-gray-200
    rounded-xl
    px-3 py-2
    text-sm
    font-medium
    text-gray-700
    shadow-sm
    hover:border-pink-400
    hover:shadow-md
    focus:outline-none
    focus:ring-2
    focus:ring-pink-400/30
    focus:border-pink-400
    transition-all
    duration-200
    cursor-pointer
  "
>
  <option value="" disabled>
    Categories
  </option>

  <option value="/men">Men</option>
  <option value="/women">Women</option>
  <option value="/kids">Kids</option>
  <option value="/accessories">Accessories</option>
</select>




      <NavLink
        to="/newArrivals"
        className={({ isActive }) =>
          isActive
            ? "text-pink-600 border-b-2 border-pink-600 pb-1"
            : "text-gray-700 pb-1"
        }
      >
        New Arrivals
      </NavLink>

      <NavLink
        to="/bestSellers"
        className={({ isActive }) =>
          isActive
            ? "text-pink-600 border-b-2 border-pink-600 pb-1"
            : "text-gray-700 pb-1"
        }
      >
        Best Sellers
      </NavLink>

      <NavLink
        to="/sales"
        className={({ isActive }) =>
          isActive
            ? "text-pink-600 border-b-2 border-pink-600 pb-1"
            : "text-gray-700 pb-1"
        }
      >
        Sales
      </NavLink>

       <NavLink
        to="/brands"
        className={({ isActive }) =>
          isActive
            ? "text-pink-600 border-b-2 border-pink-600 pb-1"
            : "text-gray-700 pb-1"
        }
      >
        Brands
      </NavLink>

    </div>
  )
}
