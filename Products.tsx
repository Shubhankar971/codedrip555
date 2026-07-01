import React from 'react';

const Products = () => {
  const allProducts = [
    { id: 1, name: "Product 1", description: "Description 1", price: "$10" },
    { id: 2, name: "Product 2", description: "Description 2", price: "$20" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Products</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {allProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
