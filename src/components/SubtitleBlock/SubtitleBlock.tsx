import styles from './SubtitleBlock.module.scss';

interface Props {
  subtitle: string;
  handleOpenEdit: () => void;
}

const SubtitleBlock = ({ subtitle, handleOpenEdit }: Props) => {
  return (
    <div className={styles.subtitle}>
      <p>{subtitle}</p>
      <img onClick={handleOpenEdit} src="/public/pencil.svg" alt="pencil" />
    </div>
  );
};

export default SubtitleBlock;
