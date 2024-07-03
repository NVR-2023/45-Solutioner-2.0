import { useState, ReactNode } from "react";
import MenuDownArrow from "../../icons/menu-down-arrow";
import FieldLabel from "../styled-text-components/field-label";

type SingleAccordionWithInverseExternalStateProps = {
  label: string;
  externalBooleanState: boolean;
  setExternalBooleanState: (isSingleAccordionOpen: boolean) => void;
  children: ReactNode;
};

const SingleAccordionWitExternalState = ({
  label,
  externalBooleanState,
  setExternalBooleanState,
  children,
}: SingleAccordionWithInverseExternalStateProps) => {
  const handleOnClick = () => {
    setExternalBooleanState(!externalBooleanState);
  };

  return (
    <div className="w-full">
      <div
        role="button"
        onClick={handleOnClick}
        className="bg-purzple-400 w-full"
      >
        <div className="flex w-full items-center justify-between">
          <FieldLabel text={label} />
          <div className="relative flex items-center">
            <div className="absolute -top-1.5 right-0 font-aperçu text-sm font-bold text-black dark:text-neutral-300 md:text-xs">
              <div
                className={`flex origin-center items-end justify-center transition-all duration-300 ${
                  externalBooleanState ? "rotate-180" : ""
                }`}
              >
                <MenuDownArrow scale={0.6125} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grid w-full overflow-hidden"
        style={{
          gridTemplateRows: externalBooleanState ? "1fr" : "0fr",
          transition: "grid-template-rows 300ms",
        }}
      >
        <div className="flex w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default SingleAccordionWitExternalState;
