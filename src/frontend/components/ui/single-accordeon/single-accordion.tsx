import { useState, ReactNode } from "react";
import MenuDownArrow from "../../icons/menu-down-arrow";

type SingleAccordionProps = {
  singleAccordionLabel: string;
  children: ReactNode;
};

const SingleAccordion = ({
  singleAccordionLabel,
  children,
}: SingleAccordionProps) => {
  const [isSingleAccordionOpen, setIsSingleAccordionOpen] = useState(false);

  const handleOnClick = () => {
    setIsSingleAccordionOpen((currentValue) => !currentValue);
  };

  return (
    <div className="inline-block w-full items-center whitespace-nowrap">
      <button onClick={handleOnClick} className="w-full">
        <div className="flex w-full items-center justify-between">
          <div className="flex font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
            {singleAccordionLabel}
          </div>
          <div className="relative flex items-center">
            <div className="flex pt-1 font-aperçu text-sm font-bold text-black dark:text-neutral-300 md:text-xs">
              <div
                className={`flex origin-center items-end justify-center transition-all duration-300 ${
                  isSingleAccordionOpen ? "rotate-180" : ""
                }`}
              >
                <MenuDownArrow scale={0.6125} />
              </div>
            </div>
          </div>
        </div>
      </button>
      <div
        className="grid w-full overflow-hidden"
        style={{
          gridTemplateRows: isSingleAccordionOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 300ms",
        }}
      >
        <div className="flex w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default SingleAccordion;
