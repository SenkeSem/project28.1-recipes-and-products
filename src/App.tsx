import Header from './components/Header';
import ProductInput from './components/ProductInput';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <main className={styles.container}>
        <Header />
        <ProductInput />
        <ProductList />
        <Footer />
      </main>
    </>
  );
}

export default App;
