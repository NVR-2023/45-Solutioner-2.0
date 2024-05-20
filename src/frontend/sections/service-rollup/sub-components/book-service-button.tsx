import { useBookServiceModalContext } from "@/frontend/contextes/use-book-service-modal-context";

const BookServiceButton = () => {
  const { bookServiceModalObject, setBookServiceModalObject } =
    useBookServiceModalContext();
  
  const xl = bookServiceModalObject.service;

  const handleOnClick = () => {};

  return (
    <div className="flex h-full items-center">
      <button
        onClick={handleOnClick}
        className="h-4 rounded-[2px] bg-neutral-900 px-3 font-aperçu text-sm font-bold leading-[.5rem] tracking-wide text-neutral-300 small-caps dark:font-semibold dark:text-neutral-300 md:text-xs"
      >
        {xl}
      </button>
    </div>
  );
};

export default BookServiceButton;
