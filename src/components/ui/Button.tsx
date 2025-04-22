import { Dispatch, SetStateAction } from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  setCounts?: Dispatch<SetStateAction<{ [key: string]: number }>>;
};

const Button = ({ text, onClick, setCounts }: ButtonProps) => {
  // button style
  const buttonStyle = `bg-(--color-Red) text-(--color-Rose50) p-3 w-full rounded-full 
     xl:w-fullhover:cursor-pointer active:bg-[#952C0C]`;

  return text === 'Start New Order' ? (
    <button
      className={buttonStyle}
      onClick={() => {
        if (setCounts) {
          setCounts({});
        }
      }}
    >
      {text}
    </button>
  ) : (
    <button onClick={onClick} className={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
