"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

async function getProducts(category, limit = 4, skip = 0) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default function ProductSection({ title, category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const loadProducts = async (isInitial = false) => {
    setLoading(true);
    try {
      const data = await getProducts(
        category,
        4,
        isInitial ? 0 : products.length
      );
      if (isInitial) {
        setProducts(data.products);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
      }
      setHasMore(products.length + data.products.length < data.total);
    } catch (err) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts(true);
  }, [category]);

  if (error)
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  if (products.length === 0 && !loading) return null;

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-[#6C63FF] pb-2 inline-block">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => loadProducts()}
            disabled={loading}
            className="bg-[#6C63FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5b54ff] transition-colors duration-300 disabled:bg-gray-400"
          >
            {loading ? "Loading..." : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}
