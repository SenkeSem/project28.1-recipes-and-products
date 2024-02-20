interface Props {
  imageUrl: string;
  handleRewriteUrl: () => void;
}

import styles from './UrlInput.module.scss';

const UrlInput = ({ imageUrl, handleRewriteUrl }: Props) => {
  return (
    <div className={styles.urlInput}>
      <input
        value={imageUrl}
        type="text"
        placeholder="введите url картинки"
        onChange={handleRewriteUrl}
      />
      <button>📌</button>
    </div>
  );
};

export default UrlInput;
