"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../components/CartContext";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const { addToCart } = useCart();

  useState(() => {
    getProduct(params.id)
      .then(setProduct)
      .catch((err) => setError("Failed to load product"))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  if (!product) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to products
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <img
            src={product.images[currentImage]}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="flex justify-center mt-4">
            {product.images.map((image, index) => (
              <button
                key={image}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentImage ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{product.rating.toFixed(1)}</span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-[#6C63FF] text-white px-6 py-2 rounded-lg hover:bg-[#5b54ff] transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
