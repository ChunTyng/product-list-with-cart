import { Dispatch, SetStateAction } from 'react';
import { cn } from '../utils/cn';

// svg
import Cart from '../assets/images/icon-add-to-cart.svg';

type CartButtonDefaultProps = {
  setHovered: Dispatch<SetStateAction<string | null>>;
  itemName: string | null;
  isHovered: boolean;
};

const CartButtonDefault = ({
  setHovered,
  itemName,
  isHovered,
}: CartButtonDefaultProps) => {
  // button base Styles
  const buttonBaseStyles = `w-[200px] border border-(--color-Rose300) flex justify-center 
                            gap-2 py-2.5 px-7 font-(--weight-600) rounded-full bg-white 
                            transition-all duration-200`;
  return (
    <div>
      <button
        onMouseEnter={() => setHovered(itemName)}
        onFocus={() => setHovered(itemName)}
        className={cn(
          buttonBaseStyles,
          isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100',
        )}
      >
        <img src={Cart} alt="cart" />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButtonDefault;
