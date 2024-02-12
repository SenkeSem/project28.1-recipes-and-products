import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './SingleRecipesPage.module.scss';

// import { useParams } from 'react-router-dom';

const SingleRecipesPage: React.FC = () => {
  // const { title } = useParams();

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <img
          src="https://images.pexels.com/photos/1437268/pexels-photo-1437268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="photo"
        />
        <section></section>
      </main>
      <Footer />
    </div>
  );
};

export default SingleRecipesPage;
