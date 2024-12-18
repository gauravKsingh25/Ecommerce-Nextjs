import { ShoppingBag, Truck, Headphones } from "lucide-react";

// AboutPage Component - Pretty straightforward, showcasing the About section of ShopIQ.
export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main container for the About page */}
      <div className="container mx-auto px-4 py-16">
        {/* Page title */}
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          About ShopIQ
        </h1>

        {/* Our Story Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-16">
          <div className="md:flex">
            {/* Left side image */}
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&q=80"
                alt="About ShopIQ"
              />
            </div>

            {/* Right side text */}
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-[#6C63FF] font-semibold">
                Our Story
              </div>
              {/* Introductory text about ShopIQ */}
              <p className="mt-2 text-gray-600">
                Welcome to ShopIQ, your one-stop destination for all your
                shopping needs. Created by Gaurav Singh in December 2024, our
                mission is to provide high-quality products across various
                categories, ensuring a seamless shopping experience for our
                valued customers.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* First Feature */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <ShoppingBag className="mx-auto text-[#6C63FF] mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-600">
              From electronics to fashion, we offer a diverse range of products
              to suit every need and preference.
            </p>
          </div>

          {/* Second Feature */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Truck className="mx-auto text-[#6C63FF] mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              We pride ourselves on quick and reliable shipping to get your
              purchases to you as soon as possible.
            </p>
          </div>

          {/* Third Feature */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Headphones className="mx-auto text-[#6C63FF] mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our dedicated customer service team is always ready to assist you
              with any queries or concerns.
            </p>
          </div>
        </div>

        {/* Call-to-action Section */}
        <div className="bg-[#6C63FF] text-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Join the ShopIQ Family</h2>
          <p className="mb-6">
            Be the first to know about our latest offers, new products, and
            exclusive deals!
          </p>
          <button className="bg-white text-[#6C63FF] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
