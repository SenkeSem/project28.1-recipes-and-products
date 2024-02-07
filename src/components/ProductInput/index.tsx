'use client';
import React, { useState } from 'react';

export default function ProductInput() {
  const [product, setProduct] = useState('');

  const handleAddProduct = () => {
    alert('Кнопка работает!!!');
  };

  return (
    <section>
      <input
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        type="text"
        placeholder="продукт..."
      />
      <button onClick={handleAddProduct}>+</button>
    </section>
  );
}
