import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';
import { useAppSelector } from '../../redux/hooks';

interface Props {
  id?: string;
  item?: object;
  title?: string;
  handleRemoveProduct?: () => void;
}

const ProductCard = ({ id, handleRemoveProduct }: Props) => {
  const product = useAppSelector((state) => state.products.products).find((item) => item.id === id);

  return (
    <div className={styles.container}>
      <section>
        <Link to={`/products/${product?.id}`}>
          <h4>{product?.title}</h4>
        </Link>
      </section>
      <section>
        <p>К/Б/Ж/У</p>
        <span>
          {product?.calories}/{product?.protein}/{product?.fat}/{product?.carb}
        </span>
        <img
          onClick={handleRemoveProduct}
          width={17}
          height={17}
          src="/public/remove.svg"
          alt="remove"
        />
      </section>
    </div>
  );
};

export default ProductCard;
