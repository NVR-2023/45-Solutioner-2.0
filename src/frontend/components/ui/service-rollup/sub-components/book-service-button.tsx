import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";
import { BookServiceModalObjectType } from "@/frontend/contexts/use-book-service-modal-context";

type BookServiceButtonProps = {
  isServiceRollupHovered: boolean;
};
const BookServiceButton = ({
  isServiceRollupHovered,
}: BookServiceButtonProps) => {
  const { bookServiceModalObject, setBookServiceModalObject } =
    useBookServiceModalContext();

  const handleOnClick = () => {
    setBookServiceModalObject(
      (previousBookServiceModalObject: BookServiceModalObjectType) => ({
        ...previousBookServiceModalObject,
        isBookServiceModalOpen: true,
      }),
    );
  };

  return (
    <button
      onClick={handleOnClick}
className={`md:text-[.625rem] h-4 flex w-14  items-center justify-center rounded-[2px] px-3 font-aperçu text-xs font-medium leading-[.5rem] tracking-wide text-neutral-300 transition-all duration-300 small-caps dark:text-neutral-900 ${isServiceRollupHovered ? "bg-neutral-900" : "bg-neutral-500"} focus:outline-none focus:ring-0 dark:font-semibold md:text-xs`}

>
      book
    </button>
  );
};

export default BookServiceButton;
