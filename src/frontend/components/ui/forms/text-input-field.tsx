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

const TextInputField = ({ name, formFields, setFormFields } : TextInputFieldProps) => {
  const [isInputFieldFocused, setIsInputFieldFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    if (!formFields[name]?.value && !isInputFieldFocused) {
      setIsInputFieldFocused(false);
    }
  }, [name, formFields, isInputFieldFocused]);

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

const getInputFieldErrorMessage = (fieldValue: FieldValueType) => {
  const validationFunction = INPUT_VALIDATION_MAP.get(name) || INPUT_VALIDATION_MAP.get("default")!;
  return validationFunction(String(fieldValue).trim());
};



  return (
    <div className="flex flex-col space-y-1.5">
      <label
        htmlFor={`${name}ID`}
        className={`ng-green-400 flex justify-between font-aperçu text-xs small-caps text-[#8e8e8e] leading-[.5rem] tracking-wide transition-transform duration-300 ${
          !isInputFieldFocused && !formFields[name]?.value && "translate-y-1"
        }`}>
        {name}
        {name === "password" && (
          <PasswordVisibilityToggle
            scale={0.5}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        )}
      </label>
      <input
        type={name === "password" ? (isPasswordVisible ? "text" : "password") : "text"}
        id={`${name}ID`}
        name={name}
        autoComplete="false"
        onChange={handleOnChange}
        onFocus={() => handleOnFocusOrBlur(true)}
        onBlur={() => handleOnFocusOrBlur(false)}
        value={formFields[name]?.value === true ? "" : (formFields[name]?.value as string) || ""}
        aria-invalid={formFields[name]?.errorMessage ? "true" : "false"}
        aria-describedby={`${name}Error`}
        className="h-4 font-aperçu text-sm bg-[#222222] border-[#D9D9D9] border-b-[0.5px] focus:border-[#94C2A4] focus:shadow-outline-green font-light focus:outline-none appearance-none pb-[.15rem] pr-[2.5rem]"
      />
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
