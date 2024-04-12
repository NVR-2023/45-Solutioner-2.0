import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import UncheckedBox from "../../icons/unchecked-box";
import CheckedBox from "../../icons/checked-box";
import ValidatedToggleSwitch from "./validated-toggle-switch";
import { ValidatedTextFormFieldsType } from "@/types/component-props-types";
import ErrorMessage from "./error-message";
import FormNotice from "./form-notice";

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
        <div className="transform translate-y-0.5">
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
          <FormNotice notice={notice} />
        </div>
      </div>
      <div
        id={`${name}Error`}
        role="alert"
        className={` transition-opacity duration-500 ${
          formFields[name]?.errorMessage ? "opacity-100" : "opacity-0"
        }`}
      >
        <ErrorMessage
          errorMessage={formFields[name]?.errorMessage || "\u00A0"}
        />
      </div>
    </div>
  );
};

export default ValidatedCheckbox;
