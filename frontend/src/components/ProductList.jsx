import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <div className="text-center text-gray-500">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
