interface Props {
  text: string;
}

const InstructionsBlock = ({ text }: Props) => {
  return (
    <div>
      <li>{text}</li>
    </div>
  );
};

export default InstructionsBlock;
