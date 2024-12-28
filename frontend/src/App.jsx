import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const convertedData = data.map(product => ({
        ...product,
        price: Math.round(product.price),
      }));
      setProducts(convertedData);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products. Please try again later.');
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts = products.filter(product => {
    if (!product || typeof product.name !== 'string') {
      console.warn('Invalid product:', product);
      return false;
    }
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-indigo-300">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <SearchBar onSearch={handleSearch} />
        {error && (
          <div className="text-red-500 text-center my-4 bg-red-100 border border-red-400 rounded p-4">
            {error}
          </div>
        )}
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
