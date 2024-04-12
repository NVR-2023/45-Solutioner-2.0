import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import InputFieldLabel from "./input-field-label";

type RegularTextInputFieldProps = {
  name: string;
  formFields: Record<string, string>;
  setFormFields: Dispatch<SetStateAction<Record<string, string>>>;
};

const RegularTextInputField = ({
  name,
  formFields,
  setFormFields,
}: RegularTextInputFieldProps) => {
  const [isInputFieldFocused, setIsInputFieldFocused] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormFields((previousFields) => ({
      ...previousFields,
      [name]: event.target.value,
    }));
  };

  const handleOnFocus = () => {
    setIsInputFieldFocused(true);
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
          value={formFields[name] as string}
          aria-describedby={`${name}Error`}
          className="h-4 w-full appearance-none border-b border-black bg-neutral-300 pb-[.15rem] font-aperçu  text-black focus:border-b focus:outline-none dark:border-[#D9D9D9] dark:bg-[#222222] md:text-xs"
        />
      </div>
      <div className="absolute -top-5 left-0 w-full">
        <label
          htmlFor={`${name}ID`}
          className={` flex items-center justify-between transition-transform duration-300 ${
            !isInputFieldFocused && !formFields[name] && "translate-y-5"
          }`}
        >
          <InputFieldLabel label={name} />
        </label>
      </div>
    </div>
  );
};

export default RegularTextInputField;
