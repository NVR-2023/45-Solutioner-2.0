import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";
import { BookServiceModalContextType } from "@/frontend/contexts/use-book-service-modal-context";

export type BookServiceButtonProps = {
  id: number | null;
  service: string | null;
  duration: string | null;
  price: string | null;
  isServiceRollupHovered: boolean;
};

const BookServiceButton = ({
  id,
  service,
  duration,
  price,
  isServiceRollupHovered,
}: BookServiceButtonProps) => {
  const { setBookServiceModalContext } = useBookServiceModalContext();

  const handleOnClick = () => {
    setBookServiceModalContext(
      (previousBookServiceModalObject: BookServiceModalContextType) => ({
        ...previousBookServiceModalObject,
        id: id,
        service: service,
        duration: duration,
        price: price,
        isBookServiceModalOpen: true,
      }),
    );
  };

  return (
    <button
      onClick={handleOnClick}
      className={`flex h-4 w-14 items-center  justify-center rounded-[2px] px-3 font-aperçu text-xs font-medium leading-[.5rem] tracking-wide text-neutral-300 transition-all duration-300 small-caps dark:text-neutral-900 md:text-[.625rem] ${isServiceRollupHovered ? "bg-neutral-900" : "bg-neutral-500"} focus:outline-none focus:ring-0 dark:font-semibold md:text-xs`}
    >
      book
    </button>
  );
};

export default BookServiceButton;
