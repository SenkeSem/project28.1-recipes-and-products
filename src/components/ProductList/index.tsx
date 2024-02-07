import { useAppSelector } from '../../redux/hooks';

export default function ProductList() {
  const items = useAppSelector((state) => state.products.products);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
