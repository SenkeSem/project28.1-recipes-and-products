import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './SingleProductPage.module.scss';

import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

const SingleProductPage: React.FC = () => {
  const { id } = useParams();

  const product = useAppSelector((state) => state.products.products).find((item) => item.id === id);

  console.log(id);

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
        <p>
          Пова́ренная соль, или пищева́я соль — пищевой продукт, представляющий собой бесцветные
          кристаллы. Соль природного происхождения почти всегда имеет примеси других минеральных
          солей, которые могут придавать ей оттенки разных цветов
        </p>
        <h3>КБЖУ</h3>
        <ul>
          <li>{product?.calories} гр.</li>
          <li>{product?.protein} гр.</li>
          <li>{product?.fat} гр.</li>
          <li>{product?.carb} гр.</li>
        </ul>
        <h4>Стоимость</h4>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
