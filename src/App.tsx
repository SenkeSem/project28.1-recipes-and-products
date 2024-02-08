import ProductPage from './pages/ProductPage/ProductPage';
import RecipesPage from './pages/RecipesPaage.tsx/RecipesPage';

import styles from './App.module.scss';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
      </Routes>
    </div>
  );
}

export default App;
