import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { INPUT_VALIDATION_MAP } from "./input-validation/input-validation-data";
import PasswordVisibilityToggle from "./password-visibility-toggle";

type FieldValueType = string | number | boolean;

type FormFieldsType = Record<
  string,
  { value: FieldValueType; errorMessage?: string }
>;

type TextInputFieldProps = {
  name: string;
  formFields: FormFieldsType;
  setFormFields: Dispatch<SetStateAction<FormFieldsType>>;
};

const TextInputField = ({
  name,
  formFields,
  setFormFields,
}: TextInputFieldProps) => {
  const [isInputFieldFocused, setIsInputFieldFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
        errorMessage: getInputFieldErrorMessage(previousFields[name]?.value),
      },
    }));
  };

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((previousValue) => !previousValue);
  };

  const getInputFieldErrorMessage = (fieldValue: FieldValueType) => {
    const validationFunction =
      INPUT_VALIDATION_MAP.get(name) || INPUT_VALIDATION_MAP.get("default")!;
    return validationFunction(String(fieldValue).trim());
  };

  return (
    <div
      className="relative flex w-full flex-col space-y-1.5"
      onFocus={() => handleOnFocus()}
      onBlur={() => handleOnBlur()}
    >
      <div>
        <input
          type={
            name === "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : "text"
          }
          id={`${name}ID`}
          name={name}
          autoComplete="false"
          onChange={handleOnChange}
          value={
            formFields[name]?.value === true
              ? ""
              : (formFields[name]?.value as string) || ""
          }
          aria-invalid={formFields[name]?.errorMessage ? "true" : "false"}
          aria-describedby={`${name}Error`}
          className="h-4 w-full appearance-none border-b border-black bg-neutral-300 pb-[.15rem] font-aperçu  text-black text-sm focus:border-b focus:outline-none dark:border-[#D9D9D9] dark:bg-[#222222]"
        />
      </div>
      <div className="absolute -top-4 left-0 w-full">
        <label
          htmlFor={`${name}ID`}
          className={`flex justify-between font-aperçu font-[900] text-xs leading-[.5rem] tracking-wide text-black transition-transform duration-300 small-caps dark:text-[#8e8e8e] ${
            !isInputFieldFocused && !formFields[name]?.value && "translate-y-5"
          }`}
        >
          {name}

          {name === "password" && (
            <span>
              <PasswordVisibilityToggle
                scale={0.5}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={handleTogglePasswordVisibility}
              />
            </span>
          )}
        </label>
      </div>

      <div
        id={`${name}Error`}
        role="alert"
        className={`text-[0.625rem] italic leading-[.5rem] text-red-500 transition-opacity duration-500 ${
          formFields[name]?.errorMessage ? "opacity-100" : "opacity-0"
        }`}
      >
        {formFields[name]?.errorMessage || "\u00A0"}
      </div>
    </div>
  );
};

export default TextInputField;
