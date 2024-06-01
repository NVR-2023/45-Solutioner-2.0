import AnimatedSlidingLabel from "@/frontend/components/ui/animated-components/animated-sliding-label.";


type BookServiceSummaryProps = {
  selectedBookDate: Date;
};
const BookServiceSummary = ({ selectedBookDate }: BookServiceSummaryProps) => {
  return (
    <footer className="flex w-full pt-4">
      <label className="flex font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
        date:
      </label>
      <div className="flex ps-1">
        <div className="flex font-aperçu text-sm font-bold leading-[.5rem] text-black dark:text-neutral-300 md:text-xs">
          <AnimatedSlidingLabel
            label={(selectedBookDate
              ? new Date(selectedBookDate)
              : new Date()
            ).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          />
        </div>
      </div>
    </footer>
  );
};

export default BookServiceSummary;
