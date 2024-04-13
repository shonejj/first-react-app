import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import products from './data/products';
import ScrollReveal from 'scrollreveal';

function Home() {
  const productsRef = useRef(null);
  const heroRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ScrollReveal().reveal(entry.target.children, {
            duration: 1000,
            delay: 300,
            origin: 'bottom',
            distance: '20px',
            easing: 'ease-in-out',
          });
        }
      });
    });

    observer.observe(productsRef.current);
    observer.observe(heroRef.current);
    observer.observe(testimonialsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <Link to="/" className="text-xl font-bold">
            Simple React Project
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div ref={heroRef} className="hero-section mb-8 relative">
        <img src="https://via.placeholder.com/1500x500" alt="Hero Banner" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
          Welcome to Our Simple React Project
        </div>
      </div>

      {/* Product Grid */}
      <div ref={productsRef} className="container mx-auto grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`} className="block bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-300">{product.description}</p>
                <p className="text-gray-300 mt-2">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div ref={testimonialsRef} className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Testimonial Cards */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-gray-300">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat aliquam velit, a hendrerit felis suscipit et. Pellentesque volutpat velit vitae risus posuere blandit."</p>
            <p className="text-gray-300 mt-4">- John Doe</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-gray-300">"Suspendisse vitae interdum metus. Integer malesuada tellus at libero porttitor vehicula. Curabitur non elit felis."</p>
            <p className="text-gray-300 mt-4">- Jane Smith</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-gray-300">"Duis sit amet metus ac nunc auctor bibendum. In hac habitasse platea dictumst. Mauris sit amet ultricies quam."</p>
            <p className="text-gray-300 mt-4">- Emily Johnson</p>
          </div>
        </div>
      </div>

      {/* Carousels Section */}
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        {/* Add your carousels here */}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">&copy; 2024 Simple React Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
