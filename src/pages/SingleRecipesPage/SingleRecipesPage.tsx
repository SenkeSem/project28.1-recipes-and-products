//@ts-nocheck

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NoSubtitleBlock from '../../components/NoSubtitleBlock/NoSubtitleBlock';
import TextAreaBlock from '../../components/TextAreaBlock/TextAreaBlock';

import styles from './SingleRecipesPage.module.scss';

import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { useState } from 'react';
import { writeSubtitle } from '../../redux/recipeSlice';
import SubtitleBlock from '../../components/SubtitleBlock/SubtitleBlock';
import IngredientsList from '../../components/IngredientsList/IngredientsList';
import IngredientsHeader from '../../components/IngredientsHeader/IngredientsHeader';

const SingleRecipesPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const [isSubtitleEdit, setIsSubtitleEdit] = useState(false);

  const { imageUrl, title, subtitle } = useAppSelector((state) => state.recipes.recipes).find(
    (obj) => obj.id === id,
  );

  const handleOpenEdit = () => {
    setIsSubtitleEdit(!isSubtitleEdit);
  };

  const handleRewriteSubtitle = (e) => {
    dispatch(
      writeSubtitle({
        id: id,
        subtitle: e.target.value,
      }),
    );
  };

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <figure style={{ backgroundImage: `url(${imageUrl})` }}></figure>
        <section>
          <h3>{title}</h3>

          {isSubtitleEdit ? (
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
        </section>
        <section className={styles.purpleContainer}>
          <h4>Время приготовления</h4>
          <ul>
            <li>
              <b>Полное</b>: 10 минут
            </li>
            <li>
              <b>Подготовка</b>: 5 минут
            </li>
            <li>
              <b>Готовка</b>: 5 минут
            </li>
          </ul>
        </section>
        <section>
          <IngredientsHeader />
          <IngredientsList />
        </section>
        <section className={styles.instructions}>
          <h4>Инструкция</h4>
          <ul>
            <li>Яйца выпустить в миску</li>
            <li>Влить в яйца молоко.</li>
            <li>
              Добавить муку и соль. По желанию можно добавить щепотку сахара, но я предпочитаю без
              него.
            </li>
            <li>Тщательно взбить смесь венчиком или просто вилкой до однородности.</li>
            <li>Влить яичную смесь на разогретую с растительным маслом сковороду.</li>
            <li>Накрыть сковороду крышкой.</li>
            <li>Выпекать омлет на сковороде минут 10-15 на небольшом огне до готовности.</li>
            <li>
              Омлет должен подняться и пропечься. По желанию омлет можно перевернуть и обжарить с
              другой стороны.
            </li>
            <li>Наш классический омлет готов. Приятного аппетита!</li>
          </ul>
        </section>
        <section>
          <h4>Энергетическая ценность</h4>
          <ul>
            <li>
              Калории: <b>431</b> ккал
            </li>
            <li>
              Белки: <b>32</b> гр
            </li>
            <li>
              Жиры: <b>20</b> гр
            </li>
            <li>
              Углеводы: <b>90</b> гр
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SingleRecipesPage;
