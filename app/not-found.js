import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-8">Oops! This page could not be found.</p>
        <Link href="/">
          <a className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
            Go Back Home
          </a>
        </Link>
      </div>
    </div>
  );
}
