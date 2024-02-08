import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { removeProduct } from '../../redux/productSlice';
import styles from './ProductList.module.scss';

const ProductList: React.FC = () => {
  const items = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <Link to={`/products/${item.id}`} key={item.id} className={styles.productItem}>
          <p>{item.title}</p>
          <img
            onClick={() => dispatch(removeProduct(item.id))}
            width={15}
            height={15}
            src="/src/assets/remove.svg"
            alt="remove"
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
