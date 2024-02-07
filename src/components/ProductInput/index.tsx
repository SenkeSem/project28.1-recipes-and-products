import { useAppDispatch } from '../../redux/hooks';
import { addProduct } from '../../redux/productSlice';
import { useState } from 'react';

export default function ProductInput() {
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState('');

  const handleAddProduct = () => {
    dispatch(addProduct(product));
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
