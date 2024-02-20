interface Props {
  imageUrl: string;
  handleOpenUrlInput: () => void;
}

import styles from './ProductPhoto.module.scss';

const ProductPhoto = ({ imageUrl, handleOpenUrlInput }: Props) => {
  return (
    <div className={styles.container}>
      <img width={140} height={140} src={imageUrl} alt="photo" />
      <button onClick={handleOpenUrlInput}>⟳</button>
    </div>
  );
};

export default ProductPhoto;
