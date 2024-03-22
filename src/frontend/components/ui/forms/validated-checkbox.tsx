import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import UncheckedBox from "../../icons/unchecked-box";
import CheckedBox from "../../icons/checked-box";
import ToggleSwitch from "../toggle-switch/toggle-switch";
import { ValidatedFormFieldsType } from "@/types/component-props-types";

type ValidatedCheckboxType = {
  name: string;
  formFields: ValidatedFormFieldsType;
  setFormFields: Dispatch<SetStateAction<ValidatedFormFieldsType>>;
  children?: ReactNode;
};

const ValidatedCheckbox = ({
  name,
  formFields,
  setFormFields,
  children,
}: ValidatedCheckboxType) => {


  const booleanState = formFields?.[name].value as boolean;

  const setBooleanState: Dispatch<SetStateAction<boolean>> = () => {
    
    setFormFields((previousFields) => ({
      ...previousFields,
      [name]: {
        ...previousFields[name],
        value: !previousFields[name].value,
      },
    }));
  };


  return (
    <div className="space-y-1.5">
      <div className="flex items-center space-x-4">
        <div>
          <ToggleSwitch
            scale={0.5}
            firstIcon={UncheckedBox}
            secondIcon={CheckedBox}
            booleanState={booleanState}
            setBooleanState={setBooleanState}
          />
        </div>
        {children}
      </div>
      <div
        id={`${name}Error`}
        role="alert"
        className={` text-xs italic leading-[.5rem] text-red-500 transition-opacity duration-500 sm:text-[0.625rem] ${
          formFields[name]?.errorMessage ? "opacity-100" : "opacity-0"
        }`}
      >
        {formFields[name]?.errorMessage || "\u00A0"}
      </div>
    </div>
  );
};

export default ValidatedCheckbox;
