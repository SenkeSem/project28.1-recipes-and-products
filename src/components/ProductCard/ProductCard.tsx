import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';

interface Props {
  id: string;
  item: object;
  title: string;
  handleRemoveProduct: () => void;
}

const ProductCard = ({ id, title, handleRemoveProduct }: Props) => {
  return (
    <div className={styles.container}>
      <section>
        <Link to={`/products/${id}`}>
          <h4>{title}</h4>
        </Link>
      </section>
      <section>
        <p>Б/Ж/У/К</p>
        <span>15/7/33/136</span>
        <img
          onClick={handleRemoveProduct}
          width={17}
          height={17}
          src="/src/assets/remove.svg"
          alt="remove"
        />
      </section>
    </div>
  );
};

export default ProductCard;
