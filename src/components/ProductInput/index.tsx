import { useAppDispatch } from '../../redux/hooks';
import { addProduct } from '../../redux/productSlice';
import { useState, useRef } from 'react';
import styles from './ProductInput.module.scss';

export default function ProductInput() {
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState('');
  const refInput = useRef<HTMLInputElement | null>(null);

  const handleAddProduct = () => {
    dispatch(addProduct(product));
    handleCleanInput();
  };

  const handleCleanInput = () => {
    setProduct('');
    refInput.current?.focus();
  };

  return (
    <section className={styles.container}>
      <input
        ref={refInput}
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        type="text"
        placeholder=" введите продукт..."
      />
      <button onClick={handleAddProduct}>✔</button>
      <button onClick={handleCleanInput}>✖</button>
    </section>
  );
}
