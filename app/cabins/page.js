import React, { Suspense } from "react";
import CabinList from "../_components/CabinList";
import { getCabins } from "../_lib/data-service";

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  const cabins = await getCabins();
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-gray-100">
        Our Luxury Cabins
      </h1>
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

      
        <Suspense fallback={<Spinner></Spinner>}>
          <CabinList></CabinList>
        </Suspense>
     
       
      
    </div>
  );
}
