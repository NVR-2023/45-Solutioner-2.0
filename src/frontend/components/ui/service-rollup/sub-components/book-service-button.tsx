import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";

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

  return (
    <button
      id={`bookModal-${id}`}
      data-service-id={id}
      data-service={service}
      data-duration={duration}
      data-price={price}
      className={`flex h-4 w-12 rounded-[2px] font-aperçu text-sm font-[400] tracking-wider text-neutral-100 transition-all duration-300 small-caps dark:text-neutral-900 md:text-[.625rem]  ${isServiceRollupHovered ? "bg-neutral-700" : "bg-neutral-500"} items-center small-caps  justify-center rounded-[2px] px-3 transition-all duration-300 focus:outline-none focus:ring-0 dark:font-semibold dark:text-neutral-900 md:text-[.625rem] `}
    >
      book
    </button>
  );
};

export default BookServiceButton;
