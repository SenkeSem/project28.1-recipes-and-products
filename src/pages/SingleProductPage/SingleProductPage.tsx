//@ts-nocheck

import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { writeSubtitle, writeUrl } from '../../redux/productSlice';
import { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductPhoto from '../../components/ProductPhoto/ProductPhoto';
import UrlInput from '../../components/UrlInput/UrlInput';
import NutritionChart from '../../components/NutritionChart/NutritionChart';
import TextAreaBlock from '../../components/TextAreaBlock/TextAreaBlock';

import styles from './SingleProductPage.module.scss';
import SubtitleBlock from '../../components/SubtitleBlock/SubtitleBlock';
import NoSubtitleBlock from '../../components/NoSubtitleBlock/NoSubtitleBlock';

const SingleProductPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.products.products).find((item) => item.id === id);

  const [isEdit, setIsEdit] = useState(false);
  const [isOpenUrlInput, setIsOpenUrlInput] = useState(false);

  const { subtitle, calories, protein, fat, carb, imageUrl } = product;

  const handleOpenEdit = () => {
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
    <div className={styles.wrapper}>
      <Header />
      <main>
        <div className={styles.card}>
          {imageUrl ? (
            <ProductPhoto imageUrl={imageUrl} handleOpenUrlInput={handleOpenUrlInput} />
          ) : (
            <div className={styles.notPhoto}>
              <button onClick={handleOpenUrlInput}>📷</button>
            </div>
          )}

          {isOpenUrlInput && (
            <UrlInput
              imageUrl={imageUrl}
              handleOpenUrlInput={handleOpenUrlInput}
              handleRewriteUrl={handleRewriteUrl}
            />
          )}

          <h1>{product?.title}</h1>

          {isEdit ? (
            <TextAreaBlock
              subtitle={subtitle}
              handleRewriteSubtitle={handleRewriteSubtitle}
              handleOpenEdit={handleOpenEdit}
            />
          ) : subtitle ? (
            <SubtitleBlock subtitle={subtitle} handleOpenEdit={handleOpenEdit} />
          ) : (
            <NoSubtitleBlock handleOpenEdit={handleOpenEdit} />
          )}

          {calories > 0 && (
            <NutritionChart calories={calories} protein={protein} fat={fat} carb={carb} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
