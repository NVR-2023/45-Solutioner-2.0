import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import UncheckedBox from "../../icons/unchecked-box";
import CheckedBox from "../../icons/checked-box";
import ValidatedToggleSwitch from "./validated-toggle-switch";
import { ValidatedTextFormFieldsType } from "@/types/component-props-types";

type ValidatedCheckboxType = {
  name: string;
  formFields: ValidatedTextFormFieldsType;
  setFormFields: Dispatch<SetStateAction<ValidatedTextFormFieldsType>>;
  notice?: ReactNode;
};

const ValidatedCheckbox = ({
  name,
  formFields,
  setFormFields,
  notice,
}: ValidatedCheckboxType) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center space-x-4">
        <div>
          <ValidatedToggleSwitch
            scale={0.5}
            firstIcon={UncheckedBox}
            secondIcon={CheckedBox}
            name={name}
            formFields={formFields}
            setFormFields={setFormFields}
          />
        </div>
        <div>
          <span>{notice}</span>
        </div>
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
