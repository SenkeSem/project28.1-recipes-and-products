import { useAppSelector } from '../../redux/hooks';

const ProductList: React.FC = () => {
  const items = useAppSelector((state) => state.products.products);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default ProductList;
