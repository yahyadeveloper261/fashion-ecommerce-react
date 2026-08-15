import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Orders({ dark }) {
  const navigate = useNavigate();
  const [saveOrders, setSaveOrders] = useState([]);

  useEffect(() => {
    const save = JSON.parse(localStorage.getItem("orders")) || [];
    setSaveOrders(save);
  }, []);

  return (
    <div
      className={`min-h-screen pt-3 px-4 pb-10 rounded-2xl ${
        dark ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>

        {saveOrders.length === 0 ? (
          // Empty Orders
          <div
            className={`rounded-2xl shadow-lg p-10 sm:p-14 text-center ${
              dark ? "bg-gray-900" : "bg-white"
            }`}
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-4xl mb-6">
              📦
            </div>

            <h2 className="text-2xl font-bold mb-3">No Orders Yet</h2>

            <p
              className={`max-w-md mx-auto ${
                dark ? "text-gray-200" : "text-gray-500"
              }`}
            >
              You haven't placed any orders yet. Start shopping and your orders
              will appear here.
            </p>

            <button
              onClick={() => navigate("/products")}
              className={`mt-7 px-7 py-3 rounded-xl font-semibold transition ${
                dark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          // Orders
          <div className="space-y-5">
            {saveOrders.map((order) => (
              <div
                key={order.id}
                className={`rounded-2xl shadow-lg p-6 ${
                  dark ? "bg-gray-900" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <h2 className="font-bold text-lg">Order #{order.id}</h2>

                    <p className="text-sm text-gray-500">
                      Status: {order.status}
                    </p>
                  </div>

                  <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                    {order.status}
                  </span>
                </div>

                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center border-b pb-3 ${
                        dark ? "border-gray-700" : "border-gray-200"
                      }`}
                    >
                      <div>
                        <p className="font-semibold">{item.name}</p>

                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p className="font-semibold">
                        Rs {item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
