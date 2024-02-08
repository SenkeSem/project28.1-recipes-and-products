import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
        Главная страница
      </NavLink>
      <NavLink to="/recipes" className={({ isActive }) => (isActive ? styles.active : '')}>
        Рецепты
      </NavLink>
      <NavLink to="/products" className={({ isActive }) => (isActive ? styles.active : '')}>
        Продуктовая база
      </NavLink>
    </header>
  );
}
