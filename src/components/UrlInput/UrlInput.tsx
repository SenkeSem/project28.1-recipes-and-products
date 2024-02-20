interface Props {
  imageUrl: string;
  handleRewriteUrl: () => void;
  handleOpenUrlInput: () => void;
}

import styles from './UrlInput.module.scss';

const UrlInput = ({ imageUrl, handleRewriteUrl, handleOpenUrlInput }: Props) => {
  return (
    <div className={styles.urlInput}>
      <input
        value={imageUrl}
        type="text"
        placeholder="введите url картинки"
        onChange={handleRewriteUrl}
      />
      <button onClick={handleOpenUrlInput}>📌</button>
    </div>
  );
};

export default UrlInput;
