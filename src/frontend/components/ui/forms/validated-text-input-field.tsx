import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { ValidatedTextFormFieldsType } from "@/types/component-props-types";

type ValidatedTextInputFieldProps = {
  name: string;
  formFields: ValidatedTextFormFieldsType;
  setFormFields: Dispatch<SetStateAction<ValidatedTextFormFieldsType>>;
};

const ValidatedTextInputField = ({
  name,
  formFields,
  setFormFields,
}: ValidatedTextInputFieldProps) => {
  const [isInputFieldFocused, setIsInputFieldFocused] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormFields((previousFields) => ({
      ...previousFields,
      [name]: {
        ...previousFields[name],
        value: event.target.value,
      },
    }));
  };

  const handleOnFocus = () => {
    setIsInputFieldFocused(true);

    setFormFields((previousFields) => ({
      ...previousFields,
      [name]: {
        ...previousFields[name],
        errorMessage: "",
      },
    }));
  };

  const handleOnBlur = () => {
    setIsInputFieldFocused(false);

    setFormFields((previousFields) => ({
      ...previousFields,
      [name]: {
        ...previousFields[name],
        errorMessage: getInputFieldErrorMessage(
          previousFields[name]?.value as string,
        ),
      },
    }));
  };

  const getInputFieldErrorMessage = (fieldValue: string) => {
    const validationFunction = formFields[name]?.validationFunction!;
    return validationFunction(String(fieldValue).trim());
  };

  return (
    <div className="relative flex w-full flex-col space-y-1.5">
      <div>
        <input
          type="text"
          id={`${name}ID`}
          name={name}
          autoComplete="off"
          onFocus={() => handleOnFocus()}
          onChange={handleOnChange}
          onBlur={() => handleOnBlur()}
          value={formFields[name]?.value as string}
          aria-invalid={formFields[name]?.errorMessage ? "true" : "false"}
          aria-describedby={`${name}Error`}
          className="h-4 w-full appearance-none border-b border-black bg-neutral-300 pb-[.15rem] font-aperçu  text-black focus:border-b focus:outline-none dark:border-[#D9D9D9] dark:bg-[#222222] md:text-xs"
        />
      </div>
      <div className="absolute -top-5 left-0 w-full">
        <label
          htmlFor={`${name}ID`}
          className={` flex items-center justify-between font-aperçu text-sm font-extrabold leading-[.5rem] tracking-wide text-black transition-transform duration-300 small-caps dark:text-neutral-300 md:text-xs ${
            !isInputFieldFocused && !formFields[name]?.value && "translate-y-5"
          }`}
        >
          {name}
        </label>
      </div>

      <div
        id={`${name}Error`}
        role="alert"
        className={` text-xs italic leading-[.5rem] text-[#ff7714] transition-opacity duration-500 sm:text-[0.625rem] ${
          formFields[name]?.errorMessage ? "opacity-100" : "opacity-0"
        }`}
      >
        {formFields[name]?.errorMessage || "\u00A0"}
      </div>
    </div>
  );
};

export default ValidatedTextInputField;
