import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <SearchBar />
        <ProductSection title="Featured Electronics" category="smartphones" />
        <ProductSection title="Trending Fashion" category="mens-shirts" />
        <ProductSection
          title="Home Decor Essentials"
          category="home-decoration"
        />
        <ProductSection title="Fragrance Collection" category="fragrances" />
      </div>
    </div>
  );
}
