import styles from './IngredientBlock.module.scss';

interface Props {
  ingredient: string;
}

const IngredientBlock = ({ ingredient }: Props) => {
  return (
    <div className={styles.wrapper}>
      <p>{ingredient}</p>
      <img width={20} height={20} src="/public/cross.svg" alt="cross" />
    </div>
  );
};

export default IngredientBlock;
