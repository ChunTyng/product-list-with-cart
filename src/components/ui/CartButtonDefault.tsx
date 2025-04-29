import { Dispatch, SetStateAction } from 'react';
import { cn } from '../../utils/cn';

// svg
// import Cart from '/images/icon-add-to-cart.svg';

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
  return (
    <div>
      <button
        onMouseEnter={() => setHovered(itemName)}
        onFocus={() => setHovered(itemName)}
        className={cn(
          'btn-base',
          isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100',
        )}
      >
        <img
          src="/product-list-with-cart/images/icon-add-to-cart.svg"
          alt="cart"
        />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButtonDefault;
