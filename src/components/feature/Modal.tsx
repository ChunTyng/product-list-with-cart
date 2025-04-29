// feature/Modal.tsx
import SelectedItemList from './SelectedItemList';
import iconOrderConfirmed from '../../assets/images/icon-order-confirmed.svg';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { Item } from '../../datatypes/item';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selected: Item[];
  counts: { [key: string]: number };
  totalCost: number;
  setCounts: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
};
const Modal = ({
  isOpen,
  onClose,
  selected,
  counts,
  totalCost,
  setCounts,
}: ModalProps) => {
  useLockBodyScroll(isOpen);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Modal content */}
      <div
        className={`fixed z-50 p-5 bg-(--color-Rose50) rounded-t-xl shadow-sm
              max-h-[90vh] overflow-y-auto transition-transform duration-300
              left-0 right-0 bottom-0 w-full
              transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}
              md:top-1/2 md:left-1/2 md:bottom-auto md:right-auto 
              md:transform md:-translate-x-1/2 md:-translate-y-1/2
              md:rounded-xl md:w-auto`}
      >
        <div className="flex flex-col gap-3 px-2 py-5">
          <img src={iconOrderConfirmed} alt="" className="w-10" />
          <h1 className="text-4xl font-(--weight-700)">Order Confirmed</h1>
          <p className="text-(--color-Rose400) font-(--weight-400)">
            We hope you enjoy your food!
          </p>
          <SelectedItemList
            selected={selected}
            counts={counts}
            totalCost={totalCost}
            setCounts={setCounts}
            variant="confirmation"
            onClose={onClose}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
