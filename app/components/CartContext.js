"use client";

import { createContext, useContext, useState } from "react";

// Context for the shopping cart
const CartContext = createContext();

// CartProvider: Wrap this around components to share cart state
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // Cart state: starts empty

  // Add a product to the cart (or update quantity if it exists)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // If item already in cart, just increase the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Otherwise, add the new item with a quantity of 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove a product from the cart by its ID
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear the entire cart (empty it out!)
  const clearCart = () => {
    setCart([]); // Boom, cart is now empty!
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to access the cart
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    // Oops, looks like you're using this outside the provider
    throw new Error("useCart must be used within a CartProvider");
  }
  return context; // Return all the cart goodies
}
