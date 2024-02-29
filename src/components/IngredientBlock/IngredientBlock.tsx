import { useAppDispatch } from '../../redux/hooks';
import { removeIngredient } from '../../redux/recipeSlice';
import { useParams } from 'react-router-dom';

import styles from './IngredientBlock.module.scss';

interface Props {
  ingredient: string;
}

const IngredientBlock = ({ ingredient }: Props) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

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
      <p>{ingredient}</p>
      <img
        onClick={handleRemoveIngredient}
        width={20}
        height={20}
        src="/public/cross.svg"
        alt="cross"
      />
    </div>
  );
};

export default IngredientBlock;
