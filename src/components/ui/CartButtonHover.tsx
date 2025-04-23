import { useEffect, useRef } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { cn } from '../../utils/cn';

// svg
import iconIncrement from '../../assets/images/icon-increment-quantity.svg';
import iconDecrement from '../../assets/images/icon-decrement-quantity.svg';

// hook
import { useBlurOnMouseLeave } from '../../hooks/useBlurOnMouseLeave';

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
  const hoverRef = useBlurOnMouseLeave<HTMLDivElement>();
  const containerRef = useRef<HTMLDivElement | null>(null);

  // keyboard handler
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isHovered) return;
    if (e.key === 'ArrowLeft') {
      setCounts((prev) => ({
        ...prev,
        [itemName]: Math.max(0, (prev[itemName] || 0) - 1),
      }));
    } else if (e.key === 'ArrowRight') {
      setCounts((prev) => ({
        ...prev,
        [itemName]: (prev[itemName] || 0) + 1,
      }));
    }
  };

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    node.addEventListener('keydown', handleKeyDown);
    return () => {
      node.removeEventListener('keydown', handleKeyDown);
    };
  }, [isHovered, itemName, setCounts]);

  useEffect(() => {
    if (isHovered && containerRef.current) {
      containerRef.current.focus();
    }
  }, [isHovered]);

  return (
    <div
      ref={(el) => {
        hoverRef.current = el;
        containerRef.current = el;
      }}
      tabIndex={0}
      className={cn(
        'btn-hover-action',
        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
    >
      <button
        tabIndex={-1}
        onClick={() =>
          setCounts((prev) => ({
            ...prev,
            [itemName]: Math.max(0, itemCount - 1),
          }))
        }
        className="btn-add-minus group"
        disabled={itemCount === 0}
      >
        <img
          src={iconDecrement}
          alt="icon-Decrement"
          className="add-minus-hover-effect"
        />
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
        className="btn-add-minus group"
      >
        <img
          src={iconIncrement}
          alt="icon-Increment"
          className="add-minus-hover-effect"
        />
      </button>
    </div>
  );
};

export default CartButtonHover;
