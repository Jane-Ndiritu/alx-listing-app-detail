import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">Airbnb Clone</h2>
          <p className="mt-2 text-sm">
            Find your favorite place with the best prices for over 2 million
            properties worldwide.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/listings">Listings</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Rooms</li>
            <li>Mansions</li>
            <li>Countryside</li>
            <li>Villas</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://twitter.com" target="_blank">
              <span className="hover:text-white">Twitter</span>
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <span className="hover:text-white">Facebook</span>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <span className="hover:text-white">Instagram</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Airbnb Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
