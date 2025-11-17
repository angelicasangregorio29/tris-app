type SquareProps = {
  value: string;
  onClick: () => void;
};

export const Square = ({ value, onClick }: SquareProps) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);