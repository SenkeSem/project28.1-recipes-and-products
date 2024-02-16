//@ts-nocheck

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './SingleProductPage.module.scss';

import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { writeSubtitle, writeUrl } from '../../redux/productSlice';
import { useState } from 'react';

const SingleProductPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.products.products).find((item) => item.id === id);

  const [isEdit, setIsEdit] = useState(false);
  const [isOpenUrlInput, setIsOpenUrlInput] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleRewriteSubtitle = (e) => {
    dispatch(
      writeSubtitle({
        id: id,
        subtitle: e.target.value,
      }),
    );
  };

  const handleRewriteUrl = (e) => {
    dispatch(
      writeUrl({
        id: id,
        imageUrl: e.target.value,
      }),
    );
  };

  const handleOpenUrlInput = () => {
    setIsOpenUrlInput(!isOpenUrlInput);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.card}>
        {product?.imageUrl ? (
          <div>
            <img width={140} height={140} src={product?.imageUrl} alt="photo" />
          </div>
        ) : (
          <div className={styles.notPhoto}>
            {isOpenUrlInput ? (
              <div className={styles.urlInput}>
                <input
                  value={product?.imageUrl}
                  type="text"
                  placeholder="введите url картинки"
                  onChange={handleRewriteUrl}
                />
                <button>📌</button>
              </div>
            ) : (
              <button onClick={handleOpenUrlInput}>📷</button>
            )}
          </div>
        )}

        <h1>{product?.title}</h1>

        {isEdit ? (
          <article>
            <textarea value={product?.subtitle} onChange={handleRewriteSubtitle}></textarea>
            <button onClick={handleEdit}>📌</button>
          </article>
        ) : (
          <article>
            {!product?.subtitle ? (
              <div className={styles.preSubtitle}>
                <p>Укажите описание продукта</p>
                <img
                  width={20}
                  height={20}
                  src="/../src/assets/pencil.svg"
                  alt="pencil"
                  onClick={handleEdit}
                />
              </div>
            ) : (
              <div className={styles.mainSubtitle}>
                <p>
                  {product?.subtitle}
                  <img
                    width={20}
                    height={20}
                    src="/../src/assets/pencil.svg"
                    alt="pencil"
                    onClick={handleEdit}
                  />
                </p>
              </div>
            )}
          </article>
        )}

        <h3>КБЖУ</h3>
        <ul>
          <li>{product?.calories} гр.</li>
          <li>{product?.protein} гр.</li>
          <li>{product?.fat} гр.</li>
          <li>{product?.carb} гр.</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
