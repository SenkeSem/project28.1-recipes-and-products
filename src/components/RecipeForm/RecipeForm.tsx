import styles from './RecipeForm.module.scss';

const RecipeForm = () => {
  return (
    <div className={styles.container}>
      <form>
        <h3>Создай рецепт</h3>
        <label>
          Заголовок:
          <input type="text" placeholder="Омлет" />
        </label>
        <label>
          Ссылка на картинку:
          <input type="text" placeholder="https://ссылка.by" />
        </label>
        <input type="button" value="✔" />
        <input type="reset" value="✖" />
      </form>
    </div>
  );
};

export default RecipeForm;
