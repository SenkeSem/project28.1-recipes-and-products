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
import NutritionFacts from '../../components/NutritionFacts/NutritionFacts';
import InstructionsHeader from '../../components/InstructionsHeader/InstructionsHeader';
import InstructionsList from '../../components/InstructionsList/InstructionsList';

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
          <InstructionsHeader />
          <InstructionsList />
        </section>
        <section>
          <h4>Энергетическая ценность</h4>
          <NutritionFacts />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SingleRecipesPage;
