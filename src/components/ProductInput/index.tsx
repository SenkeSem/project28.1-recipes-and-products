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
    setProduct('');
    refInput.current?.focus();
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
        placeholder="продукт..."
      />
      <img
        width={20}
        height={20}
        onClick={handleAddProduct}
        src="/src/assets/check.svg"
        alt="check"
      />
      <img
        onClick={handleCleanInput}
        width={20}
        height={20}
        src="/src/assets/cross.svg"
        alt="cross"
      />
    </section>
  );
}
