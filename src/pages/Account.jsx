import React from "react";
import { useNavigate } from "react-router-dom";

export default function Account({ dark }) {
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen pt-3 px-4 pb-10 rounded-2xl ${
        dark ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8">
          My Account
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Profile Card */}
          <div
            className={`md:col-span-1 rounded-2xl p-6 shadow ${
              dark ? "bg-gray-900" : "bg-white"
            }`}
          >
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl">
                👤
              </div>
            </div>

            <h2 className="text-xl font-bold text-center">
              Muhammad Yahya
            </h2>

            <p className="text-gray-500 text-center mt-1">
              yahya@example.com
            </p>

            <button
              className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800"
            >
              Edit Profile
            </button>
          </div>

          {/* Account Options */}
          <div
            className={`md:col-span-2 rounded-2xl p-6 shadow ${
              dark ? "bg-gray-900" : "bg-white"
            }`}
          >
            <h2 className="text-xl font-bold mb-5">
              Account
            </h2>

            <div className="space-y-3">

              {/* Orders */}
              <button
                onClick={() => navigate("/orders")}
                className={`w-full flex items-center justify-between p-4 rounded-xl ${
                  dark
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📦</span>
                  <div className="text-left">
                    <h3 className="font-semibold">My Orders</h3>
                    <p className="text-sm text-gray-500">
                      View your orders
                    </p>
                  </div>
                </div>

                <span>→</span>
              </button>

              {/* Wishlist */}
              <button
                onClick={() => navigate("/wishlist")}
                className={`w-full flex items-center justify-between p-4 rounded-xl ${
                  dark
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">❤️</span>
                  <div className="text-left">
                    <h3 className="font-semibold">Wishlist</h3>
                    <p className="text-sm text-gray-500">
                      Your saved products
                    </p>
                  </div>
                </div>

                <span>→</span>
              </button>

              {/* Address */}
              <button
                className={`w-full flex items-center justify-between p-4 rounded-xl ${
                  dark
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📍</span>
                  <div className="text-left">
                    <h3 className="font-semibold">My Address</h3>
                    <p className="text-sm text-gray-500">
                      Manage delivery address
                    </p>
                  </div>
                </div>

                <span>→</span>
              </button>

              {/* Settings */}
              <button
                className={`w-full flex items-center justify-between p-4 rounded-xl ${
                  dark
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">⚙️</span>
                  <div className="text-left">
                    <h3 className="font-semibold">Settings</h3>
                    <p className="text-sm text-gray-500">
                      Account preferences
                    </p>
                  </div>
                </div>

                <span>→</span>
              </button>

            </div>

            {/* Logout */}
            <button
              className="w-full mt-6 border border-red-500 text-red-500 py-3 rounded-xl hover:bg-red-500 hover:text-white transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}