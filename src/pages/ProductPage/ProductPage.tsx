import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductInput from '../../components/ProductInput';
import ProductList from '../../components/ProductList';
import styles from './ProductPage.module.scss';

const ProductPage: React.FC = () => {
  return (
    <>
      <main className={styles.container}>
        <Header />
        <section className={styles.product}>
          <ProductInput />
          <ProductList />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default ProductPage;
