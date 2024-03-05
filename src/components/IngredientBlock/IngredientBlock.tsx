import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { removeIngredient } from '../../redux/recipeSlice';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styles from './IngredientBlock.module.scss';
import { useState } from 'react';

interface Props {
  ingredient: string;
}

const IngredientBlock = ({ ingredient }: Props) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const product = useAppSelector((state) => state.products.products).find(
    (prod) => prod.title === ingredient,
  );

  const [grams, setGrams] = useState('');

  const handleRemoveIngredient = () => {
    dispatch(
      removeIngredient({
        id,
        ingredient,
      }),
    );
  };

  return (
    <div className={styles.wrapper}>
      <Link to={`/products/${product?.id}`}>
        <p>{ingredient}</p>
      </Link>
      <article>
        <input
          type="number"
          value={grams}
          onChange={(e) => setGrams(e.target.value)}
          placeholder="0"
        />
        <p>гр.</p>
      </article>
      <img onClick={handleRemoveIngredient} width={20} height={20} src="/cross.svg" alt="cross" />
    </div>
  );
};

export default IngredientBlock;
