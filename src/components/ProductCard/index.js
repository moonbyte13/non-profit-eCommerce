import React from 'react';

function ProductCard({ name, price, image, description }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} class='w-50' />
      </div>
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price">${price.toFixed(2)}</div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
