import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces";

const Card: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      {/* Property image */}
      <div className="relative w-full h-60">
        <Image
          src={property.image}
          alt={property.name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{property.name}</h2>
        <p className="text-gray-600 text-sm">
          {property.address.city}, {property.address.country}
        </p>
        <p className="text-yellow-500 font-medium mt-1">
          ⭐ {property.rating}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-2">
          {property.category.map((cat, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Price */}
        <p className="mt-3 font-semibold text-gray-800">
          ${property.price} / night
        </p>

        {/* Offers */}
        <div className="text-sm text-gray-600 mt-2">
          🛏 {property.offers.bed} &nbsp; 🚿 {property.offers.shower} &nbsp; 👥{" "}
          {property.offers.occupants}
        </div>

        {/* Discount */}
        {property.discount && (
          <p className="mt-2 text-sm text-red-500 font-bold">
            {property.discount}% OFF
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
