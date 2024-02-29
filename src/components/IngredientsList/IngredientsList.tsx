import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

const IngredientsList = () => {
  const { id } = useParams();

  const recipe = useAppSelector((state) =>
    state.recipes.recipes.find((recipe) => recipe.id === id),
  );

  return (
    <ul>
      {recipe?.ingredients?.map((ingredient) => (
        <li>{ingredient}</li>
      ))}
    </ul>
  );
};

export default IngredientsList;
