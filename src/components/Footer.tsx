import { Item } from './Content';
import { Dispatch, SetStateAction } from 'react';
import SelectedItemList from './feature/SelectedItemList';

// svg
import illustrationEmptyCart from '../assets/images/illustration-empty-cart.svg';

type FooterProps = {
  data: Item[];
  counts: { [key: string]: number };
  setCounts: Dispatch<SetStateAction<{ [key: string]: number }>>;
  hovered: string | null;
  setHovered: Dispatch<SetStateAction<string | null>>;
};

// button style
const Footer = ({ data, counts, setCounts }: FooterProps) => {
  const selected = data.filter((item) => (counts[item.name] || 0) > 0);
  const totalSelectedItems = selected.reduce(
    (acc, item) => acc + (counts[item.name] || 0),
    0,
  );
  const totalCost = selected.reduce(
    (sum, item) => sum + (counts[item.name] || 0) * item.price,
    0,
  );
  console.log(selected);
  console.log(totalSelectedItems);
  console.log(totalCost);

  return (
    <footer
      className="bg-white py-5 px-7 flex flex-col md:justify-center md:items-center 
                  md:w-[650px] gap-5 rounded-xl xl:grow-11 xl:shrink-0 xl:h-full xl:w-[400px] 
                  2xl:w-[1400px] 2xl:p-20 "
    >
      <h2 className="text-(--color-Red) font-(--weight-700) text-2xl 2xl:text-4xl">
        Your Cart({totalSelectedItems})
      </h2>
      {/* default footer */}
      {totalSelectedItems === 0 ? (
        <div className="flex flex-col justify-center items-center gap-5 2xl:w-full">
          <img
            src={illustrationEmptyCart}
            alt="illustration-empty-cart"
            className="2xl:w-[400px]"
          />
          <p className="text-(--color-Rose500) text-center 2xl:text-xl">
            Your added items will appear here
          </p>
        </div>
      ) : (
        // Footer when items are selected
        <SelectedItemList
          selected={selected}
          counts={counts}
          setCounts={setCounts}
          totalCost={totalCost}
          variant="summary"
        />
      )}
    </footer>
  );
};

export default Footer;
