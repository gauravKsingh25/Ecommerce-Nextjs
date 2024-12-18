import { Suspense } from "react";
import ProductCard from "../components/ProductCard";

async function searchProducts(query) {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) {
    throw new Error("Failed to search products");
  }
  return res.json();
}

export default async function SearchPage({ searchParams }) {
  const query = searchParams.q || "";
  const { products } = await searchProducts(query);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {products.length === 0 && (
          <p className="text-center text-gray-500">
            No products found for "{query}"
          </p>
        )}
      </Suspense>
    </div>
  );
}
