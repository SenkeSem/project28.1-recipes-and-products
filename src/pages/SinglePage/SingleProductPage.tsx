import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './SingleProductPage.module.scss';

import { useParams } from 'react-router-dom';

const SingleProductPage: React.FC = () => {
  const { title } = useParams();

  return (
    <div className={styles.container}>
      <Header />
      <h1>{title ? title : 'Продукт'}</h1>
      <h2>Описание</h2>
      <h3>КБЖУ</h3>
      <h4>Стоимость</h4>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
