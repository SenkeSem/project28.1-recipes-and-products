import styles from './NoSubtitleBlock.module.scss';

interface Props {
  handleOpenEdit: () => void;
}

const NoSubtitleBlock = ({ handleOpenEdit }: Props) => {
  return (
    <div className={styles.preSubtitle}>
      <p>Укажите описание</p>
      <img onClick={handleOpenEdit} src="/pencil.svg" alt="pencil" />
    </div>
  );
};

export default NoSubtitleBlock;
