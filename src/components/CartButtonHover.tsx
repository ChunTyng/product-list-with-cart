import { Dispatch, SetStateAction } from 'react';
import { cn } from '../utils/cn';

// svg
import iconIncrement from '../assets/images/icon-increment-quantity.svg';
import iconDecrement from '../assets/images/icon-decrement-quantity.svg';

type CartButtonHoverProps = {
  isHovered: boolean;
  setCounts: Dispatch<SetStateAction<{ [key: string]: number }>>;
  itemName: string;
  itemCount: number;
};

const CartButtonHover = ({
  isHovered,
  setCounts,
  itemName,
  itemCount,
}: CartButtonHoverProps) => {
  // button styles
  const baseStyles = `w-[200px] border border-[var(--color-Rose300)] flex items-center 
                      justify-between gap-2 px-4 py-3 bg-[var(--color-Red)] rounded-full 
                      transition-all duration-200 absolute left-0 top-0`;
  const AddMinusBtnStyles = `border border-white rounded-2xl p-1 h-5 hover:cursor-pointer
                             hover:bg-(--color-Rose50) group`;
  const hoverEffect =
    'group-hover:[filter:brightness(0)_saturate(100%)_invert(56%)_sepia(100%)' +
    '_saturate(7492%)_hue-rotate(14deg)_brightness(91%)_contrast(88%)]';

  return (
    <div
      className={cn(
        baseStyles,
        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
    >
      <button
        onClick={() =>
          setCounts((prev) => ({
            ...prev,
            [itemName]: Math.max(0, itemCount - 1),
          }))
        }
        className={AddMinusBtnStyles}
        disabled={itemCount === 0}
      >
        <img src={iconDecrement} alt="icon-Decrement" className={hoverEffect} />
      </button>

      <span className="text-md text-white w-3 text-center">{itemCount}</span>

      <button
        tabIndex={-1}
        onClick={() =>
          setCounts((prev) => ({
            ...prev,
            [itemName]: itemCount + 1,
          }))
        }
        className={AddMinusBtnStyles}
      >
        <img src={iconIncrement} alt="icon-Increment" className={hoverEffect} />
      </button>
    </div>
  );
};

export default CartButtonHover;
