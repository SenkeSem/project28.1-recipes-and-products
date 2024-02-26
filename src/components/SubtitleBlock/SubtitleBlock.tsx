import styles from './SubtitleBlock.module.scss';

interface Props {
  subtitle: string;
  handleOpenEdit: () => void;
}

const SubtitleBlock = ({ subtitle, handleOpenEdit }: Props) => {
  return (
    <div className={styles.subtitle}>
      <i>{subtitle}</i>
      <img onClick={handleOpenEdit} src="/../src/assets/pencil.svg" alt="pencil" />
    </div>
  );
};

export default SubtitleBlock;
