import Button from '../ui/Button';

// svg
// import iconCarbonNeutral from '/images/icon-carbon-neutral.svg';
// import iconRemoveItem from '/images/icon-remove-item.svg';

// type
import { Item } from '../../datatypes/item';

type SelectedItemProps = {
  selected: Item[];
  counts: { [key: string]: number };
  totalCost: number;
  setCounts: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
  onConfirm?: () => void;
  onClose?: () => void;
  variant?: 'summary' | 'confirmation';
};

const SelectedItemList = ({
  selected,
  counts,
  totalCost,
  setCounts,
  onConfirm,
  onClose,
  variant,
}: SelectedItemProps) => {
  const hoverEffect =
    'group-hover:[filter:brightness(0)_saturate(100%)_invert(7%)_sepia(11%)_saturate(5924%)_hue-rotate(340deg)_brightness(94%)_contrast(98%)]';

  if (variant === 'confirmation') {
    return (
      <section
        className="flex flex-col justify-center items-center w-full 
                    xl:w-full"
      >
        <div className="w-full flex flex-col justify-center items-center p-5 bg-(--color-Rose100) rounded-md m-1">
          {selected.map((item) => (
            <div className="w-full flex flex-col" key={item.name}>
              <div className="flex flex-row items-center justify-between gap-2">
                <img
                  src={item.image.thumbnail}
                  alt="product thumbnail"
                  className="w-13 rounded-sm"
                />
                <div className="flex flex-col text-left font-(--weight-600) text-sm w-auto min-w-0">
                  <h4 className="truncate max-w-[19ch] w-[16ch] my-1">
                    {item.name}
                  </h4>
                  <div className="flex flex-row text-(--color-Rose400) items-center">
                    <p className="text-(--color-Red) mr-2">
                      {counts[item.name]}x
                    </p>
                    <p className="font-(--weight-400) mx-2">
                      @{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <p className="text-(--color-Rose900) font-(--weight-600)">
                  ${(counts[item.name] * item.price).toFixed(2)}
                </p>
              </div>
              <hr className="text-(--color-Rose300) opacity-25 my-5" />
            </div>
          ))}
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-nowrap text-sm">Order Total</p>
            <p className="text-2xl font-(--weight-700)">
              ${totalCost.toFixed(2)}
            </p>
          </div>
        </div>
        <Button
          text="Start New Order"
          setCounts={setCounts}
          onClick={onClose}
        />
      </section>
    );
  } else if (variant === 'summary') {
    return (
      <section className="flex flex-col justify-center items-center w-full gap-5 xl:w-full">
        {selected.map((item) => (
          <div className="w-full flex flex-col gap-4" key={item.name}>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col text-left font-(--weight-600) gap-1">
                <h4>{item.name}</h4>
                <div className="flex flex-row gap-2 text-(--color-Rose300) items-center">
                  <p className="text-(--color-Red) mr-2">
                    ``
                    {counts[item.name]}x
                  </p>
                  <p className="font-(--weight-400) mx-2">
                    @{item.price.toFixed(2)}
                  </p>
                  <p className="text-(--color-Rose500)">
                    ${(counts[item.name] * item.price).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                className="rounded-2xl border border-(--color-Rose400) p-0.5 hover:border-(--color-Rose900)
                        hover:cursor-pointer group"
                onClick={() =>
                  setCounts((prev) => ({ ...prev, [item.name]: 0 }))
                }
              >
                <img
                  src="/product-list-with-cart/images/icon-remove-item.svg"
                  alt="icon-remove-item"
                  className={hoverEffect}
                />
              </button>
            </div>
            <hr className="text-(--color-Rose100)" />
          </div>
        ))}
        <div className="flex flex-row justify-between items-center w-full">
          <p className="text-nowrap">Order Total</p>
          <p className="text-2xl font-(--weight-700)">
            ${totalCost.toFixed(2)}
          </p>
        </div>
        <p
          className="flex justify-center items-center text-center
         bg-[var(--color-Rose100)] px-4 py-3 rounded-md w-full gap-x-2 gap-y-1
            xl:w-full"
        >
          <img
            src="/product-list-with-cart/images/icon-carbon-neutral.svg"
            alt=""
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <span className="text-sm sm:text-base leading-tight">
            This is a{' '}
            <span className="font-[var(--weight-600)] whitespace-nowrap">
              carbon-neutral
            </span>{' '}
            delivery
          </span>
        </p>
        <Button text="Confirm Order" onClick={onConfirm} />
      </section>
    );
  }
};

export default SelectedItemList;
