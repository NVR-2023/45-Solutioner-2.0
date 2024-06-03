import MenuDownArrow from "@/frontend/components/icons/menu-down-arrow";

type DetailsProps = {
  isCalendarExpanded: boolean;
  setIsCalendarExpanded: (isCalendarExpanded: boolean) => void;
};

const Details = ({
  isCalendarExpanded,
  setIsCalendarExpanded,
}: DetailsProps) => {
  const handleOnToggleCalendarVisibility = () => {
    setIsCalendarExpanded(!isCalendarExpanded);
  };

  return (
    <div className="flex w-full flex-col rounded bg-neutral-300">
      <div
        style={{
          gridTemplateRows: !isCalendarExpanded ? "0fr" : "1fr",
          transition: "grid-template-rows 300ms",
        }}
        className="g-0 m-0 grid h-full w-full p-0 "
      >
        <div className="overflow-hidden">
          <button
            onClick={handleOnToggleCalendarVisibility}
            className="flex w-full justify-between"
          >
            <div className="flex h-full w-full items-center justify-between px-4">
              <div className="flex font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
                details
              </div>
              <div className="relative flex items-center">
                <div className="flex pt-1 font-aperçu text-sm font-bold text-black dark:text-neutral-300 md:text-xs">
                  <div
                    className={`flex origin-center items-end justify-center transition-all duration-300 ${
                      isCalendarExpanded ? "" : "rotate-180"
                    }`}
                  >
                    <MenuDownArrow scale={0.6125} />
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div
        role="button"
        className="grid w-full overflow-hidden"
        onClick={handleOnToggleCalendarVisibility}
        style={{
          gridTemplateRows: !isCalendarExpanded ? "1fr" : "0fr",
          transition: "grid-template-rows 300ms",
        }}
      >
        <div className="flex flex-col w-full overflow-hidden px-4">
            <div>123</div>
            <div>123</div>
            <div>123</div>
          </div>
      </div>
    </div>
  );
};

export default Details;

/* 
        <div
          className="grid h-full w-full overflow-hidden"
          onClick={handleOnToggleCalendarVisibility}
          style={{
            gridTemplateRows: isCalendarExpanded ? "0fr" : "1fr",
            transition: "grid-template-rows 300ms",
          }}
        >
          <div className="w-full flex-col overflow-hidden rounded bg-orange-300 px-4">
            <div className="bg-blue-400">123</div>
            <div className="bg-blue-400">123</div>
            <div className="bg-blue-400">123</div>
          </div>
        </div>; */
