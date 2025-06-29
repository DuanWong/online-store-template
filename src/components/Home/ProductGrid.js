import React from 'react';
import ProductCard from './ProductCard';
import '../../css/Home-Style/ProductGrid.css';

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}

export default ProductGrid;