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
      className={`lex h-4 items-center rounded-[2px] ${isServiceRollupHovered ? "bg-neutral-700" : "bg-neutral-500"}`}
    >
      <span className="flex items-center px-3 font-aperçu text-sm font-[400] leading-[.5rem] tracking-wider text-white small-caps dark:text-neutral-900 md:text-[.625rem]">
        book
      </span>
    </button>
  );
};

export default BookServiceButton;

/*     return (
      <button
        onClick={handleOnClick}
        className={`flex h-4 w-12 rounded-[2px]  text-neutral-100 transition-all duration-300 ${isServiceRollupHovered ? "bg-neutral-700" : "bg-neutral-500"} items-center  justify-center rounded-[2px] px-3 font-aperçu text-xs font-medium leading-[.5rem] tracking-wide text-neutral-300 transition-all duration-300 small-caps focus:outline-none focus:ring-0 dark:font-semibold dark:text-neutral-900 md:text-[.625rem] md:text-xs`}
      >
        book
      </button>
    ); */
