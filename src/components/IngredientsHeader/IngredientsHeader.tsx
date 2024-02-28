import styles from './IngredientsHeader.module.scss';
import { useAppSelector } from '../../redux/hooks';
import { useState } from 'react';

const IngredientsHeader = () => {
  const products = useAppSelector((state) => state.products.products);

  const [product, setProduct] = useState(products);

  const handleGetProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <input type="search" onChange={handleGetProduct} placeholder="Найдите продукт" />
        <ul>
          {product.map((prod) => (
            <li key={prod.id}>{prod.title}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default IngredientsHeader;
