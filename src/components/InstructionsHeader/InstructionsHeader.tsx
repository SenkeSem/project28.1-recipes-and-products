import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { useRef, useState } from 'react';
import { addInstruction } from '../../redux/recipeSlice';

import styles from './InstructionsHeader.module.scss';

const InstructionsHeader = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const [areaValue, setAreaValue] = useState('');
  const myRef = useRef<HTMLTextAreaElement>(null);

  const handleAddInstruction = () => {
    dispatch(
      addInstruction({
        id,
        instruction: areaValue,
      }),
    );
    handleClearArea();
  };

  const handleClearArea = () => {
    setAreaValue('');
    myRef.current?.focus();
  };

  return (
    <div className={styles.wrapper}>
      <h4>
        Инструкция
        {isAreaOpen ? (
          <img onClick={() => setIsAreaOpen(!isAreaOpen)} src="/minus.svg" alt="minus" />
        ) : (
          <img onClick={() => setIsAreaOpen(!isAreaOpen)} src="/plus.svg" alt="plus" />
        )}
      </h4>

      {isAreaOpen && (
        <article>
          <textarea
            ref={myRef}
            value={areaValue}
            onChange={(e) => setAreaValue(e.target.value)}
            placeholder="Поле для ввода пунтка инструкции к рецепту..."></textarea>
          <div>
            <img onClick={handleAddInstruction} src="/check.svg" alt="check" />
            <img onClick={handleClearArea} src="/clear.svg" alt="clear" />
          </div>
        </article>
      )}
    </div>
  );
};

export default InstructionsHeader;
