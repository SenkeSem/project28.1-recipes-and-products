interface Props {
  imageUrl: string;
  handleOpenUrlInput: () => void;
}

import styles from './ProductPhoto.module.scss';

const ProductPhoto = ({ imageUrl, handleOpenUrlInput }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <button onClick={handleOpenUrlInput}>⟳</button>
    </div>
  );
};

export default ProductPhoto;
