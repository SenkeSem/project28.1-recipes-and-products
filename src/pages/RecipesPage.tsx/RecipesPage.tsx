import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import RecipeList from '../../components/RecipeList/RecipeList';

import styles from './RecipesPage.module.scss';

const RecipesPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <RecipeForm />
        <RecipeList />
      </main>
      <Footer />
    </div>
  );
};

export default RecipesPage;
