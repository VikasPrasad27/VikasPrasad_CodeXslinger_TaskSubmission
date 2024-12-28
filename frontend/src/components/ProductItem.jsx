import React from 'react';

function ProductItem({ product }) {
  if (!product) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={`https://media.istockphoto.com/id/1273685654/photo/household-appliances-and-electronic-in-cardboard-boxes-on-shelves-of-warehouse-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=bNAdxQvmEnPsBjUbTdswxe7aKobnDduAni0SYAh_Hbc=`}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-purple-600 font-bold text-xl">₹{product.price.toLocaleString('en-IN')}</p>
        </div>
        <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
