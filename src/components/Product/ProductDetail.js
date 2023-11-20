// src/components/Product/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch individual product details from the API
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  if (!product) {
    return <div></div>;
  }

  return (
    <div className="product-detail-container">
      <h1 className="product-detail-title">Product Detail</h1>
      <div className="product-card">
        <img
          src={product.image}
          alt={product.title}
          className="product-detail-image"
        />
        <h2>{product.title}</h2>
        <p className="product-detail-description">{product.description}</p>
        <p className="product-detail-price">Price: ${product.price}</p>
        <Link to="/product-list" className="back-button">
          Back to Product List
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
