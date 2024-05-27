import { useState, ReactNode } from "react";
import MenuDownArrow from "../../icons/menu-down-arrow";

type SingleAccordionProps = {
  label: string;
  children: ReactNode;
};

const SingleAccordion = ({ label, children }: SingleAccordionProps) => {
  const [isSingleAccordionOpen, setIsSingleAccordionOpen] = useState(false);

  const handleOnClick = () => {
    setIsSingleAccordionOpen((currentValue) => !currentValue);
  };

  return (
    <button
      onClick={handleOnClick}
      className="flex w-full flex-col items-center"
    >
      <div className="flex h-full w-full items-center justify-between">
        <span className="flex font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
          {label}
        </span>
        <span className="pt-[3]">
          <span
            className={`flex origin-center  items-center justify-center bg-green-400 transition-transform duration-300 ${
              isSingleAccordionOpen ? "rotate-180" : ""
            } `}
          >
            <MenuDownArrow scale={0.6125} />
          </span>
        </span>
      </div>
      <div
        className="grid w-full"
        style={{
          gridTemplateRows: isSingleAccordionOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 500ms",
        }}
      >
        <div className="flex w-full overflow-hidden">{children}</div>
      </div>
    </button>
  );
};

export default SingleAccordion;
