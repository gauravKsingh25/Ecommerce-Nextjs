import Link from "next/link";
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative aspect-square">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-[#6C63FF] text-white px-2 py-1 rounded-full text-sm font-semibold">
            ${product.price}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 truncate">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="ml-1 text-sm text-gray-600">
              {product.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
