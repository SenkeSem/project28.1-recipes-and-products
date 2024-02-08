import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './MainPage.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Тут будет что-то вроде описания, как этим всем добром пользоваться</h1>
      <h2>А может даже навалю немного three.js'a, когда научусь это делать :)</h2>
      <Footer />
    </div>
  );
};

export default MainPage;
