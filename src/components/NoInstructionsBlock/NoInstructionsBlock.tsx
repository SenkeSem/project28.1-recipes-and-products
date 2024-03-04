import styles from './NoInstructionsBlock.module.scss';

const NoInstructionsBlock = () => {
  return (
    <div className={styles.wrapper}>
      <p>Инструкции к этому рецепту ещё не написаны!</p>
      <img src="/emptyList.svg" alt="emptyList" />
    </div>
  );
};

export default NoInstructionsBlock;
