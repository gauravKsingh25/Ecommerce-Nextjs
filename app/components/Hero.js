"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// Images for the carousel (just some cool banners)
const images = [
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Switch image every 5 seconds (auto slideshow, y'all!)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer); // Clean up when done
  }, []);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Loop through images and apply the "fade-in" effect */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`E-commerce banner showcasing products - Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to ShopIQ 🚀
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Discover amazing products at unbeatable prices 💸
              </p>
              <button className="bg-[#6C63FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5b54ff] transition-colors duration-300 flex items-center mx-auto">
                Shop Now <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
