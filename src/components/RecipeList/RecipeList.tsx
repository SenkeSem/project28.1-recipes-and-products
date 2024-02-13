import styles from './RecipeList.module.scss';
import RecipeCard from '../RecipeCard/RecipeCard';
import { removeRecipe } from '../../redux/recipeSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const RecipeList: React.FC = () => {
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.list}>
      {recipes.map((item) => (
        <RecipeCard
          key={item.id}
          id={item.id}
          title={item.title}
          handleRemoveRecupe={() => dispatch(removeRecipe(item.id))}
        />
      ))}
    </div>
  );
};

export default RecipeList;
