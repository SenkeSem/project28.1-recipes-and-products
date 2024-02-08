import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './RecipesPage.module.scss';

const RecipesPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Тут будут рецепты</h1>
      <Footer />
    </div>
  );
};

export default RecipesPage;
