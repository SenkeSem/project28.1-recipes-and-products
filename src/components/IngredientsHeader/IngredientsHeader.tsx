import styles from './IngredientsHeader.module.scss';
import { useAppSelector } from '../../redux/hooks';
import { useState } from 'react';
import ProductSearchItem from '../ProductSearchItem/ProductSearchItem';

const IngredientsHeader = () => {
  const products = useAppSelector((state) => state.products.products);

  const [product, setProduct] = useState(products);
  const [inputValue, setInputValue] = useState('');

  const handleGetProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setProduct(
      products.filter((prod) => {
        const regex = new RegExp(e.target.value, 'gi');
        return prod.title.match(regex);
      }),
    );
  };

  return (
    <div className={styles.wrapper}>
      <h4>Ингредиенты</h4>
      <section>
        <input
          type="search"
          value={inputValue}
          onChange={handleGetProduct}
          placeholder="Найдите продукт"
        />
        <ul className={inputValue.length > 0 ? styles.activeList : ''}>
          {inputValue.length > 0 &&
            product.map((prod) => <ProductSearchItem key={prod.id} title={prod.title} />)}
        </ul>
      </section>
    </div>
  );
};

export default IngredientsHeader;
