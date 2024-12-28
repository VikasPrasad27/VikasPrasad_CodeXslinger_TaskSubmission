import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center">
          Vikas Electronics Shop
        </h1>

        <div className="flex space-x-4">
          <button className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300">
            Login
          </button>
          <button className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 8h14a1 1 0 001-1V9M7 13h10"
              />
            </svg>
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
