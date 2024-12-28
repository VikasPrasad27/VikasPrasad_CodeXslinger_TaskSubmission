import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <div className="mb-8 mt-8 relative">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-3 rounded-full border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pl-12 text-lg"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-400 absolute left-4 top-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 4a6 6 0 100 12 6 6 0 000-12zM21 21l-4.35-4.35"
        />
      </svg>
    </div>
  );
}

export default SearchBar;
