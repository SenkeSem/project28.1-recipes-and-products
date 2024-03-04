import styles from './InstructionsHeader.module.scss';

const InstructionsHeader = () => {
  return (
    <div className={styles.wrapper}>
      <h4>Инструкция</h4>
      <img src="/add.svg" alt="add" />
    </div>
  );
};

export default InstructionsHeader;
