import styles from './TextAreaBlock.module.scss';

interface Props {
  subtitle: string | undefined;
  handleRewriteSubtitle: () => void;
  handleOpenEdit: () => void;
}

const TextAreaBlock = ({ subtitle, handleRewriteSubtitle, handleOpenEdit }: Props) => {
  return (
    <article className={styles.wrapper}>
      <textarea value={subtitle} onChange={handleRewriteSubtitle}></textarea>
      <button onClick={handleOpenEdit}>📌</button>
    </article>
  );
};

export default TextAreaBlock;
