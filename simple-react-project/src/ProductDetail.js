import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './data/products';

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find(product => product.id === parseInt(productId));

  if (!product) {
    return (
      <div className="bg-gray-900 text-white min-h-screen">
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto">
            <Link to="/" className="text-xl font-bold">
              Simple React Project
            </Link>
          </div>
        </nav>
        <div className="container mx-auto mt-8">
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="text-white">Product not found</div>
            </div>
          </div>
        </div>
        <footer className="bg-gray-800 py-4 mt-8">
          <div className="container mx-auto text-center">
            <p className="text-gray-300">&copy; 2024 Simple React Project. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <Link to="/" className="text-xl font-bold">
            Simple React Project
          </Link>
        </div>
      </nav>
      <div className="container mx-auto mt-8">
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-300">{product.description}</p>
            <p className="text-gray-300 mt-2">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 py-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">&copy; 2024 Simple React Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ProductDetail;
