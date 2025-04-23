import { Dispatch, SetStateAction } from 'react';

// component
import CartButtonDefault from './ui/CartButtonDefault';
import CartButtonHover from './ui/CartButtonHover';

// types
import { Item } from '../datatypes/item';
import { Status } from '../datatypes/status';

type ContentProps = {
  data: Item[];
  status: Status;
  counts: { [key: string]: number };
  setCounts: Dispatch<SetStateAction<{ [key: string]: number }>>;
  hovered: string | null;
  setHovered: Dispatch<SetStateAction<string | null>>;
};

const Content = ({
  data,
  status,
  counts,
  setCounts,
  hovered,
  setHovered,
}: ContentProps) => {
  if (status.loading) return <div className="text-3xl">Loading...</div>;
  if (status.error) return <div>Error: {status.error}</div>;

  return (
    <main className="md:grid md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-4">
      {data.map((item, index) => {
        // variables
        const itemCount: number = counts[item.name] || 0;
        const isHovered: boolean = hovered === item.name;

        return (
          <section key={index} className="flex flex-col gap-3">
            <div
              className="relative my-7 outline-(--color-Red) focus-within:outline-2 
                         rounded-md"
            >
              {/* product images */}
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet={item.image.desktop}
                />
                <source
                  media="(min-width: 1024px)"
                  srcSet={item.image.tablet}
                />
                <img
                  src={item.image.mobile}
                  alt={item.name}
                  className="w-full h-full rounded-md object-cover 2xl:aspect-1/1"
                />
              </picture>

              {/* button */}
              <div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                onMouseLeave={() => setHovered(null)}
              >
                {/* Button when not hovered */}
                <CartButtonDefault
                  setHovered={setHovered}
                  itemName={item.name}
                  isHovered={isHovered}
                />
                {/* Button when hovered */}
                <CartButtonHover
                  isHovered={isHovered}
                  setCounts={setCounts}
                  itemName={item.name}
                  itemCount={itemCount}
                />
              </div>
            </div>

            {/* product info */}
            <div>
              <p className="text-(--color-Rose500) text-sm 2xl:text-lg">
                {item.category}
              </p>
              <h1 className="text-(--color-Rose900) font-(--weight-600) 2xl:text-2xl">
                {item.name}
              </h1>
              <p className="text-(--color-Red) font-(--weight-600) 2xl:text-2xl">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Content;
