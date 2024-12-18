import { Suspense } from "react";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";

// Fetch products by category
async function getProductsByCategory(category) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}?limit=20`
  );
  if (!res.ok) throw new Error("Oops! Failed to fetch products"); // Catch fetch issues
  return res.json();
}

// Dynamic route handling for category page
export default async function CategoryPage({ params }) {
  // Await the params object
  const { category } = await params; // Ensure params is awaited properly
  const { products } = await getProductsByCategory(category); // Fetch products for category

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button to categories */}
      <Link
        href="/categories"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Categories
      </Link>

      {/* Show category name */}
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {category.split("-").join(" ")}
      </h1>

      {/* Product grid */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
