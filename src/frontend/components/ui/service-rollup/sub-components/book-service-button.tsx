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
      className={`flex h-4 items-center justify-center rounded-[2px] transition-all duration-300 w-14 ${isServiceRollupHovered ? "bg-neutral-800 " : "bg-neutral-500 "} px-3 font-aperçu text-xs font-medium  leading-[.5rem] tracking-wide text-neutral-300 small-caps focus:outline-none focus:ring-0 dark:font-semibold dark:text-neutral-300 md:text-xs`}
    >
      book
    </button>
  );
};

export default BookServiceButton;
