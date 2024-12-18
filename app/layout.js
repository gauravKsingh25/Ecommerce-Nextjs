import "./globals.css";
import { CartProvider } from "./components/CartContext";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "E-commerce Website",
  description: "A sample e-commerce website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
