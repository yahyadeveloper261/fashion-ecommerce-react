import React from "react";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ openMenu, setOpenMenu, dark }) {
  return (
    <div>
      {openMenu && (
        <div
          className={`fixed top-0 left-0 w-80 h-screen
          shadow-2xl z-50 p-6 border-r
          ${
            dark
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-white text-gray-900 border-gray-200"
          }`}
        >
          <div className="flex justify-between items-center mb-8">

            <h2
              className={`text-xl font-bold tracking-wide ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              Fashion Store
            </h2>

            <button
              onClick={() => setOpenMenu(false)}
              className={`text-xl w-9 h-9 rounded-full transition
              ${
                dark
                  ? "text-white hover:bg-gray-800"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-2">

            <NavLink
              to="/"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : dark
                    ? "text-gray-200 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : dark
                    ? "text-gray-200 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              ShopNow
            </NavLink>

            <NavLink
              to="/men"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : dark
                    ? "text-gray-200 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Men
            </NavLink>

            <NavLink
              to="/women"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : dark
                    ? "text-gray-200 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Women
            </NavLink>

            <NavLink
              to="/kids"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : dark
                    ? "text-gray-200 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Kids
            </NavLink>

            <NavLink
              to="/accessories"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : dark
                    ? "text-gray-200 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Accessories
            </NavLink>

            <NavLink
              to="/newArrivals"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : dark
                    ? "text-gray-200 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              New Arrivals
            </NavLink>

            <NavLink
              to="/bestSellers"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : dark
                    ? "text-gray-200 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Best Sellers
            </NavLink>

            <NavLink
              to="/sales"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : dark
                    ? "text-gray-200 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Sales
            </NavLink>

            <NavLink
              to="/brands"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : dark
                    ? "text-gray-200 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Brands
            </NavLink>

          </div>
        </div>
      )}
    </div>
  );
}