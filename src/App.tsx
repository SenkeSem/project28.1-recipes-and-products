import ProductPage from './pages/ProductPage/ProductPage';
import RecipesPage from './pages/RecipesPage.tsx/RecipesPage';
import SingleProductPage from './pages/SinglePage/SingleProductPage';
import MainPage from './pages/MainPage/MainPage';
import SingleRecipesPage from './pages/SingleRecipesPage/SingleRecipesPage';

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
        <Route path="/recipes/:id" element={<SingleRecipesPage />} />
      </Routes>
    </div>
  );
}

export default App;
