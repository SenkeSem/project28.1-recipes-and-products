import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { removeProduct } from '../../redux/productSlice';
import styles from './ProductList.module.scss';

import ProductCard from '../ProductCard/ProductCard';

const ProductList: React.FC = () => {
  const items = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          item={item}
          title={item.title}
          handleRemoveProduct={() => dispatch(removeProduct(item.id))}
        />
      ))}
    </div>
  );
};

export default ProductList;
