"use client";

import { useCart } from "./CartContext";

export default function CartDropdown() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="absolute top-full right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transform transition-all duration-300 ease-in-out opacity-100">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center justify-between">
          Your Cart 🛒
          <span className="text-sm text-gray-500">{cart.length} item(s)</span>
        </h3>
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">
            Your cart's looking a bit lonely... 🫣
          </p>
        ) : (
          <>
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all"
                >
                  <span className="font-medium text-gray-700">
                    {item.title} (x{item.quantity})
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-300"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-3">
              {/* Clear Cart Button */}
              <button
                onClick={clearCart}
                className="w-full py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
              >
                Clear All 🧹
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
