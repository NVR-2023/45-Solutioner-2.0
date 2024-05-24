import { useBookServiceModalContext } from "@/frontend/contextes/use-book-service-modal-context";
import { BookServiceModalObjectType } from "@/frontend/contextes/use-book-service-modal-context";

const BookServiceButton = () => {
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
      className="focus:ring-0 rounded-[2px] h-4 bg-neutral-500 px-3 font-aperçu text-sm font-bold leading-[.5rem] tracking-wide text-neutral-300 small-caps focus:outline-none dark:font-semibold dark:text-neutral-300 md:text-xs"
    >
      book
    </button>
  );
};

export default BookServiceButton;
