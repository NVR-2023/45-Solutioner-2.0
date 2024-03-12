import { useEffect, useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { INPUT_VALIDATION_MAP } from "./input-validation/input-validation-data";

type TextInputFieldProps<T extends Record<string, any>> = {
  name: string;
  formFields?: T;
  setFormFields?: Dispatch<SetStateAction<T | undefined>>;
};

const TextInputField = <T extends Record<string, any>>({
  name,
  formFields,
  setFormFields,
}: TextInputFieldProps<T>) => {
  const [isInputFieldFocused, setIsInputFieldFocused] = useState(false);

  useEffect(() => {
    if (!formFields?.[name].value) {
      setIsInputFieldFocused(false);
    }
  }, [name, formFields]);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormFields?.(
      (previousFields) =>
        ({
          ...previousFields,
          [name]: {
            ...previousFields?.[name],
            value: event.target.value,
            errorMessage: "",
          },
        } as T)
    );
  };

  const handleOnFocus = () => {
    setIsInputFieldFocused(true);
  };

  const handleOnBlur = () => {
    const validationFunction = INPUT_VALIDATION_MAP.get(name);
    const preValidatedField = formFields?.[name]?.value;
    const errorMessage = validationFunction ? validationFunction(preValidatedField) : undefined;

    setFormFields?.(
      (previousFields) =>
        ({
          ...previousFields,
          [name]: {
            ...previousFields?.[name],
            errorMessage: errorMessage,
          },
        } as T)
    );
  };

  return (
    <div className="flex flex-col space-y-1.5 relative">
      <label
        htmlFor={`${name}ID`}
        className={`font-aperçu text-xs small-caps text-[#8e8e8e] leading-[.5rem] tracking-wide absolute transition-transform duration-300 ${
          isInputFieldFocused || formFields?.[name]?.value ? "-translate-y-3" : "translate-y-1"
        }`}>
        {name}
      </label>
      <input
        type="text"
        id={`${name}ID`}
        name={name}
        autoComplete="true"
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={formFields?.[name]?.value}
        aria-invalid={formFields?.[name]?.error ? "true" : "false"}
        aria-describedby={`${name}Error`}
        className="h-4 font-aperçu text-sm bg-[#222222] border-[#D9D9D9] border-b-[0.5px] focus:border-[#94C2A4] focus:shadow-outline-green font-light focus:outline-none appearance-none pb-[.15rem] "
      />

      <div
        id={`${name}Error`}
        role="alert"
        className={`text-red-500 text-[0.625rem] italic leading-[.5rem] transition-opacity duration-500 ${
          formFields?.[name]?.errorMessage ? "opacity-100" : "opacity-0"
        }`}>
        {formFields?.[name]?.errorMessage || "\u00A0"}
      </div>
    </div>
  );
};

export default TextInputField;
