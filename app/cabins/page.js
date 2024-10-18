import React from "react";

export const metadata = {
  title: "Cabins",
};

export default function Page() {
  const cabins = [];
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-gray-100">Our Luxury Cabins</h1>
      <p className="text-lg mb-8 text-gray-100 ">
        Experience the best in luxury and comfort. Our cabins are meticulously
        designed to provide a serene escape from the hustle and bustle of daily
        life. Nestled in breathtaking natural surroundings, each cabin features
        exquisite interiors, modern amenities, and stunning views. Whether
        you’re looking for a romantic getaway, a family retreat, or an
        adventure-filled vacation, our cabins offer the perfect sanctuary.
        Immerse yourself in nature while enjoying the finest hospitality and
        service. Discover your dream getaway with us!
      </p>

      {cabins.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cabins.map((cabin) => (
            <CabinCard key={cabin.id} cabin={cabin} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-100">
          No cabins available at the moment.
        </p>
      )}
    </div>
  );
}
