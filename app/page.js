import React from "react";
import Image from "next/image";
import Link from "next/link"; 
import bg from '@/public/bg.png';

export default function Page() {
  return (
    <main className="mt-24 overflow-hidden">
      <Image 
        fill 
        placeholder="blur" 
        src={bg} 
        className="object-cover" 
        alt="StayZen" 
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white p-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">The StayZen</h1>
        <p className="text-xl mb-8 drop-shadow-md">Welcome to paradise</p>
        <Link href="/cabins" className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out">
            Explore Luxury Cabins
        </Link>
      </div>
    </main>
  );
}
