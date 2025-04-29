import { Dispatch, SetStateAction } from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  setCounts?: Dispatch<SetStateAction<{ [key: string]: number }>>;
};

const Button = ({ text, onClick, setCounts }: ButtonProps) => {
  const handleClick = () => {
    if (setCounts) {
      setCounts({});
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className="btn-submit">
      {text}
    </button>
  );
};

export default Button;
