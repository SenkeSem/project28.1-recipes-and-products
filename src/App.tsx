import ProductPage from './pages/ProductPage/ProductPage';
import RecipesPage from './pages/RecipesPaage.tsx/RecipesPage';
import SingleProductPage from './pages/SinglePage/SingleProductPage';
import MainPage from './pages/MainPage/MainPage';

import styles from './App.module.scss';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
      </Routes>
    </div>
  );
}

export default App;
