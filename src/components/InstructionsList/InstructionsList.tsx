import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import NoInstructionsBlock from '../NoInstructionsBlock/NoInstructionsBlock';

import styles from './InstructionsList.module.scss';
import InstructionsBlock from '../InstructionsBlock/InstructionsBlock';

const InstructionsList = () => {
  const { id } = useParams();
  const recipe = useAppSelector((state) => state.recipes.recipes).find(
    (recipe) => id === recipe.id,
  );

  return (
    <ul className={styles.wrapper}>
      {recipe?.instructions?.length ? (
        recipe?.instructions?.map((item) => <InstructionsBlock text={item} />)
      ) : (
        <NoInstructionsBlock />
      )}
    </ul>
  );
};

export default InstructionsList;
