import styles from './NoIngredientsBlock.module.scss';

const NoIngredientsBlock = () => {
  return (
    <div className={styles.wrapper}>
      <p>Вы ещё не добавили ингредиенты!</p>
      <img src="/food.svg" alt="food" />
    </div>
  );
};

export default NoIngredientsBlock;
