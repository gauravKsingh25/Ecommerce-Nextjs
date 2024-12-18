import Link from "next/link";

// Helper function to get an image URL based on the category name.
// Default image used if category doesn't exist in the list.
function getCategoryImage(category) {
  const images = {
    smartphones:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
    laptops:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
    fragrances:
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=500&q=80",
    skincare:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&q=80",
    groceries:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80",
    "home-decoration":
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80",
    furniture:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
    tops: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&q=80",
    "womens-dresses":
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80",
    "womens-shoes":
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80",
    "mens-shirts":
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=500&q=80",
    "mens-shoes":
      "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=500&q=80",
    "mens-watches":
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
    "womens-watches":
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80",
    "womens-bags":
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500&q=80",
    "womens-jewellery":
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80",
    sunglasses:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
  };
  return (
    images[category] ||
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&q=80"
  ); // Default image for uncategorized items
}

// List of all product categories (kept simple for iteration below)
const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
];

// Main page for displaying all product categories.
export default function CategoriesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main container */}
      <div className="container mx-auto px-4 py-16">
        {/* Page heading */}
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Product Categories
        </h1>

        {/* Grid to show all categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            // Each category card links to its own page
            <Link
              key={category}
              href={`/category/${category}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image with hover effect */}
              <div className="relative h-48">
                <img
                  src={getCategoryImage(category)}
                  alt={`${category} category`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">
                    View Products
                  </span>
                </div>
              </div>

              {/* Category title and description */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {/* Capitalize and format category names */}
                  {category
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </h2>
                <p className="text-gray-600 text-sm">
                  Explore our collection of {category.split("-").join(" ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
