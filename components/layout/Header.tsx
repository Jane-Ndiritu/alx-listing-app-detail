import React from "react";
import Image from "next/image";
import { Button } from "@/components/common/Button";

const accommodationTypes = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Apartments",
  "Beachfront",
];

const Header: React.FC = () => {
  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
 
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
          <span className="text-xl font-bold text-gray-800">
            ALXbnb
          </span>
        </div>
        <div className="flex-1 mx-8">
          <input
            type="text"
            placeholder="Search destinations, properties..."
            className="w-full border rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button label="Sign In" variant="secondary" />
          <Button label="Sign Up" variant="primary" />
        </div>
      </div>
      <nav className="w-full bg-gray-50 border-t border-gray-200">
        <ul className="flex items-center justify-center gap-6 py-3 text-gray-600 text-sm font-medium">
          {accommodationTypes.map((type) => (
            <li
              key={type}
              className="cursor-pointer hover:text-primary transition"
            >
              {type}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
