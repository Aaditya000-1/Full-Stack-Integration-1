import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/api/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  const handleBuy = (product) => {
    alert(`You clicked Buy Now for ${product.name} ($${product.price})`);
    // You can add further logic here, e.g., add-to-cart, redirect to checkout, etc.
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-container">
      <h2 className="product-title">Product List</h2>
      <div className="product-list">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button
              className="buy-btn"
              onClick={() => handleBuy(product)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
