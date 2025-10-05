import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants/propertyListingSample"; // wherever you stored it
import Card from "@/components/common/Card";
import FiltersSection from "@/components/layout/FiltersSection";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-40 p-6 rounded text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Find your favorite place here!
          </h1>
          <p className="text-white text-lg md:text-2xl mt-2">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <FiltersSection />

      {/* Listing Section */}
      <section className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <Card key={index} property={property} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
