"use client";

export default function Error({ reset, error }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md">
        <h1 className="text-4xl font-semibold text-red-500 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-6">
          {`Something went wrong: ${error.message}`}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
