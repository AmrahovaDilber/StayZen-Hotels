import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About StayZen",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-8  from-blue-50 to-indigo-100 min-h-screen">
      {/* Main Content Section */}
      <div className="col-span-3 p-6 bg-white rounded-lg ">
        <h1 className="text-4xl font-bold mb-4 text-indigo-800">
          Welcome to StayZen
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          StayZen offers a perfect getaway for those seeking peace and luxury. 
          Nestled in serene environments, our accommodations are designed 
          to provide tranquility, comfort, and unforgettable experiences. 
          Discover a home away from home with StayZen.
        </p>
        <ul className="list-disc ml-5 text-gray-600 space-y-2">
          <li>Luxury suites with modern amenities</li>
          <li>Spa and wellness centers to rejuvenate your mind and body</li>
          <li>World-class dining experiences with local delicacies</li>
          <li>Nature tours, adventure activities, and more</li>
        </ul>
      </div>

      {/* Left Image Section */}
      <div className="col-span-2 flex items-center justify-center">
        <Image
          src="/images/resort1.jpg"
          alt="Resort View"
          width={400}
          height={300}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Right Image Section */}
      <div className="col-span-2 flex items-center justify-center">
        <Image
          src="/images/spa.jpg"
          alt="Spa Experience"
          width={400}
          height={300}
          className="rounded-lg  object-cover"
        />
      </div>

      {/* Additional Info Section */}
      <div className="col-span-3 p-6 bg-white rounded-lg  mt-4">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
          Why Choose StayZen?
        </h2>
        <p className="text-gray-600">
          At StayZen, we believe in creating experiences that inspire. Whether 
          you're looking for a peaceful retreat or an adventure-filled escape, 
          our properties offer the best of both worlds. With personalized services, 
          eco-friendly practices, and luxurious accommodations, StayZen promises 
          to make your stay truly memorable.
        </p>
      </div>
    </div>
  );
}
