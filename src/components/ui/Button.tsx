import { Dispatch, SetStateAction } from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  setCounts?: Dispatch<SetStateAction<{ [key: string]: number }>>;
};

const Button = ({ text, onClick, setCounts }: ButtonProps) => {
  return text === 'Start New Order' ? (
    <button
      className="btn-submit"
      onClick={() => {
        if (setCounts) {
          setCounts({});
        }
      }}
    >
      {text}
    </button>
  ) : (
    <button onClick={onClick} className="btn-submit">
      {text}
    </button>
  );
};

export default Button;
