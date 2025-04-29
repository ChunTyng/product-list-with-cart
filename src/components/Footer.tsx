import { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
//feature
import SelectedItemList from './feature/SelectedItemList';
import Modal from './feature/Modal';

// svg
// import illustrationEmptyCart from '/images/illustration-empty-cart.svg';

// type
import { Item } from '../datatypes/item';

type FooterProps = {
  data: Item[];
  counts: { [key: string]: number };
  setCounts: Dispatch<SetStateAction<{ [key: string]: number }>>;
};

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

  const [open, setOpen] = useState(false);

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
            src="/product-list-with-cart/images/illustration-empty-cart.svg"
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
          onConfirm={() => setOpen(true)}
        />
      )}

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        selected={selected}
        counts={counts}
        totalCost={totalCost}
        setCounts={setCounts}
      />
    </footer>
  );
};

export default Footer;
