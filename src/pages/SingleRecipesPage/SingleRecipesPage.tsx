import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './SingleRecipesPage.module.scss';

import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

const SingleRecipesPage: React.FC = () => {
  const { id } = useParams();

  const recipe = useAppSelector((state) => state.recipes.recipes).find((obj) => obj.id === id);

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <img src={recipe?.imageUrl} alt="photo" />
        <section>
          <h3>{recipe?.title}</h3>
          <i>
            Омлет на молоке - один из самых вкусных, простых и любимых омлетов. Молоко делает омлет
            нежным, лёгким, достаточно пышным и очень вкусным. Омлет на молоке - прекрасный вариант
            для завтрака!
          </i>
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
          <h4>Ингредиенты</h4>
          <ul>
            <li>яйца</li>
            <li>молоко</li>
            <li>соль</li>
            <li>перец</li>
          </ul>
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
