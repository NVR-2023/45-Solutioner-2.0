import { useEffect, useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { INPUT_VALIDATION_MAP } from "./input-validation/input-validation-data";
import PasswordVisibilityToggle from "./password-visibility-toggle";

type FieldValueType = string | number | boolean;

type FormFieldsType = Record<string, { value: FieldValueType; errorMessage?: string }>;

type TextInputFieldProps = {
  name: string;
  formFields: FormFieldsType;
  setFormFields: Dispatch<SetStateAction<FormFieldsType>>;
};

const TextInputField = ({ name, formFields, setFormFields }: TextInputFieldProps) => {
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

  const handleOnFocusOrBlur = (focus: boolean) => {
    setIsInputFieldFocused(focus);

    setFormFields((previousFields) => ({
      ...previousFields,
      [name]: {
        ...previousFields[name],
        errorMessage: focus ? "" : getInputFieldErrorMessage(previousFields[name]?.value),
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
    <div className="relative w-full flex flex-col space-y-1.5">
      <div>
        <input
          type={name === "password" ? (isPasswordVisible ? "text" : "password") : "text"}
          id={`${name}ID`}
          name={name}
          autoComplete="false"
          onChange={handleOnChange}
          value={formFields[name]?.value === true ? "" : (formFields[name]?.value as string) || ""}
          onFocus={() => handleOnFocusOrBlur(true)}
          onBlur={() => handleOnFocusOrBlur(false)}
          aria-invalid={formFields[name]?.errorMessage ? "true" : "false"}
          aria-describedby={`${name}Error`}
          className="h-4 w-full font-aperçu text-sm bg-[#222222] border-[#D9D9D9] border-b-[0.5px] focus:border-[#D9D9D9] font-light focus:outline-none appearance-none pb-[.15rem]"
        />
      </div>
      <div className="w-full absolute -top-4 left-0">
        <label
          htmlFor={`${name}ID`}
          className={`flex justify-between font-aperçu text-xs small-caps text-[#8e8e8e] leading-[.5rem] tracking-wide transition-transform duration-300 ${
            !isInputFieldFocused && !formFields[name]?.value && "translate-y-5"
          }`}>
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
        className={`text-red-500 text-[0.625rem] italic leading-[.5rem] transition-opacity duration-500 ${
          formFields[name]?.errorMessage ? "opacity-100" : "opacity-0"
        }`}>
        {formFields[name]?.errorMessage || "\u00A0"}
      </div>
    </div>
  );
};

export default TextInputField;
