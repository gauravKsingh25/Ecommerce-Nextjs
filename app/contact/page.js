import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Contact Us
        </h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-[#6C63FF] text-white p-8">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-4">
                We'd love to hear from you. Our friendly team is always here to
                chat.
              </p>
              <div className="flex items-center mb-4">
                <Mail className="mr-4" size={24} />
                <span>info@shopiq.com</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="mr-4" size={24} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4" size={24} />
                <span>123 ShopIQ Street, E-commerce City, 12345</span>
              </div>
            </div>
            <form className="p-8 flex-grow">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#6C63FF] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#5b54ff] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="mb-6">
            Can't find the answer you're looking for? Reach out to our customer
            support team.
          </p>
          <a href="#" className="text-[#6C63FF] font-semibold hover:underline">
            Visit our FAQ page
          </a>
        </div>
      </div>
    </div>
  );
}
