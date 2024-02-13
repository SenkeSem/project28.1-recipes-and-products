import styles from './RecipeForm.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { addRecipe } from '../../redux/recipeSlice';
import { useState } from 'react';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const dispatch = useAppDispatch();

  const handleAddRecipe = (e) => {
    e.preventDefault;
    dispatch(
      addRecipe({
        title: title,
        imageUrl: imageUrl,
      }),
    );

    setTitle('');
    setImageUrl('');
  };

  return (
    <div className={styles.container}>
      <form>
        <h3>Создай рецепт</h3>
        <label>
          Заголовок:
          <input
            value={title}
            type="text"
            placeholder="Омлет"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Ссылка на картинку:
          <input
            value={imageUrl}
            type="text"
            placeholder="https://ссылка.by"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <input type="button" value="✔" onClick={(e) => handleAddRecipe(e)} />
        <input type="reset" value="✖" />
      </form>
    </div>
  );
};

export default RecipeForm;
