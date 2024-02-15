import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './SingleProductPage.module.scss';

import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { writeSubtitle } from '../../redux/productSlice';
import { useState } from 'react';

const SingleProductPage: React.FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.products.products).find((item) => item.id === id);

  const [text, setText] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleRewriteSubtitle = () => {
    dispatch(
      writeSubtitle({
        id: id,
        subtitle: text,
      }),
    );
    handleEdit();
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.card}>
        <img
          width={140}
          height={140}
          src="https://cdn.ime.by/UserFiles/images/catalog/Goods/8031/00118031/norm/00118031.n_1.png"
          alt="photo"
        />
        <h1>{product?.title}</h1>

        {isEdit ? (
          <article>
            <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <button onClick={handleRewriteSubtitle}>✔</button>
            <button onClick={handleEdit}>✖</button>
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
                  {product?.subtitle}{' '}
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
