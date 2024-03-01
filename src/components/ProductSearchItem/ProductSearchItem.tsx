import styles from './ProductSearchItem.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { addIngredient } from '../../redux/recipeSlice';
import { useParams } from 'react-router-dom';

interface Props {
  title: string;
}

const ProductSearchItem = ({ title }: Props) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const handleAddIngredient = () => {
    dispatch(
      addIngredient({
        id,
        ingredient: title,
      }),
    );
  };

  return (
    <li className={styles.wrapper}>
      {title} <img onClick={handleAddIngredient} src="/plus.svg" alt="plus" />
    </li>
  );
};

export default ProductSearchItem;
