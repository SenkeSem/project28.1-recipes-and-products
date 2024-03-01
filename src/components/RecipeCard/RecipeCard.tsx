import styles from './RecipeCard.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  id: string | undefined;
  title: string;
  handleRemoveRecupe: () => void;
}

const RecipeCard = ({ id, title, handleRemoveRecupe }: Props) => {
  return (
    <div className={styles.container}>
      <Link to={`/recipes/${id}`}>
        <h2>{title}</h2>
      </Link>
      <img width={24} height={24} src="/remove.svg" alt="remove" onClick={handleRemoveRecupe} />
    </div>
  );
};

export default RecipeCard;
