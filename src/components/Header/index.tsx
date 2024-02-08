import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.nav}>
      <Link to="">Главная страница</Link>
      <Link to="/recipes">Рецепты</Link>
      <Link to="/">Продуктовая база</Link>
    </header>
  );
}
