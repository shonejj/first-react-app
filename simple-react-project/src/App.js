import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Home from './Home';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap Routes */}
        <Route path="/" element={<Home />} /> {/* Use element prop */}
        <Route path="/product/:productId" element={<ProductDetail />} /> {/* Use element prop */}
      </Routes>
    </Router>
  );
}

export default App;
