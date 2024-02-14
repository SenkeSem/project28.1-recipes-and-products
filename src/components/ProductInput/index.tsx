import { useAppDispatch } from '../../redux/hooks';
import { addProduct } from '../../redux/productSlice';
import { useState } from 'react';
import styles from './ProductInput.module.scss';

export default function ProductInput() {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [carb, setCarb] = useState('');

  const handleAddProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(
      addProduct({
        id: new Date().toISOString(),
        title: title,
        calories: calories,
        protein: protein,
        fat: fat,
        carb: carb,
      }),
    );
  };

  const handleCleanInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setTitle('');
    setCalories('');
    setProtein('');
    setFat('');
    setCarb('');
  };

  return (
    <section className={styles.container}>
      <form>
        <label>
          название:
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="гречка"
          />
        </label>
        <label>
          каллории:
          <input
            type="text"
            placeholder="330"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </label>
        <label>
          белки:
          <input
            type="text"
            placeholder="12,6"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
          />
        </label>
        <label>
          жиры:
          <input
            type="text"
            placeholder="3,3"
            value={fat}
            onChange={(e) => setFat(e.target.value)}
          />
        </label>
        <label>
          углеводы:
          <input
            type="text"
            placeholder="57,1"
            value={carb}
            onChange={(e) => setCarb(e.target.value)}
          />
        </label>
        <article>
          <button onClick={handleAddProduct}>✔</button>
          <button onClick={handleCleanInput}>✖</button>
        </article>
      </form>
    </section>
  );
}
