import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { removeInstruction } from '../../redux/recipeSlice';

import styles from './InstructionsBlock.module.scss';

interface Props {
  text: string;
}

const InstructionsBlock = ({ text }: Props) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const handleRemoveInstruction = () => {
    dispatch(
      removeInstruction({
        id,
        instruction: text,
      }),
    );
  };

  return (
    <li className={styles.wrapper}>
      {text} <img onClick={handleRemoveInstruction} src="/close.svg" alt="close" />
    </li>
  );
};

export default InstructionsBlock;
