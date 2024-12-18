"use client";

import Link from "next/link";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartContext";
import CartDropdown from "./CartDropdown";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  // Scrolls to the search input on click
  const handleSearchClick = () => {
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
      searchInput.scrollIntoView({ behavior: "smooth" });
      searchInput.focus();
    }
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Brand logo and home link */}
          <Link href="/" className="text-2xl font-bold text-[#6C63FF]">
            Shop<span className="text-gray-800">IQ</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-300"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-300"
            >
              Contact
            </Link>

            {/* Search Button */}
            <button
              onClick={handleSearchClick}
              className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-300"
            >
              <Search size={20} />
            </button>

            {/* Cart Button */}
            <button
              className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-300 relative"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart size={20} />
              {/* Cart Item Count */}
              {cart && cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-600 hover:text-[#6C63FF] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="block text-gray-600 hover:text-[#6C63FF] transition-colors duration-300"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:text-[#6C63FF] transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-[#6C63FF] transition-colors duration-300"
            >
              Contact
            </Link>
            <button
              onClick={handleSearchClick}
              className="block text-gray-600 hover:text-[#6C63FF] transition-colors duration-300"
            >
              <Search size={20} />
            </button>
            <button
              className="block text-gray-600 hover:text-[#6C63FF] transition-colors duration-300 relative"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart size={20} />
              {cart && cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className="absolute top-[calc(100%+10px)] right-0 w-72 bg-white shadow-lg rounded-md border border-gray-200 z-50">
          <CartDropdown />
        </div>
      )}
    </nav>
  );
}
