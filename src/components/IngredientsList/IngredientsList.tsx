import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import IngredientBlock from '../IngredientBlock/IngredientBlock';

import styles from './IngredientsList.module.scss';

const IngredientsList = () => {
  const { id } = useParams();

  const recipe = useAppSelector((state) =>
    state.recipes.recipes.find((recipe) => recipe.id === id),
  );

  return (
    <div className={styles.wrapper}>
      {recipe?.ingredients?.map((ingredient) => (
        <IngredientBlock ingredient={ingredient} />
      ))}
    </div>
  );
};

export default IngredientsList;
