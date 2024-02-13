import styles from './RecipeList.module.scss';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useAppSelector } from '../../redux/hooks';

const RecipeList: React.FC = () => {
  const recipes = useAppSelector((state) => state.recipes.recipes);

  return (
    <div className={styles.list}>
      {recipes.map((item) => (
        <RecipeCard key={item.id} />
      ))}
    </div>
  );
};

export default RecipeList;
