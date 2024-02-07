import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.nav}>
      <p>Главная страница</p>
      <p>Рецепты</p>
      <p>Продуктовая база</p>
    </header>
  );
}
