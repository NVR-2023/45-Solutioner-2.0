import { ChangeEvent, Dispatch, SetStateAction } from "react";

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
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormFields?.(
      (prevFields) =>
        ({
          ...prevFields,
          [name]: {
            ...prevFields?.[name],
            value: event.target.value,
          },
        } as T)
    );
  };

  return (
    <div className="flex flex-col space-y-1">
      <div className="flex justify-between">
        <label
          htmlFor={`${name}ID`}
          className="mb-1 font-aperçu text-xs small-caps text-[#D9D9D9] leading-[.5rem] tracking-wide">
          {name}
        </label>
      </div>
      <input
        type="text"
        id={`${name}ID`}
        name={name}
        autoComplete="true"
        onChange={handleOnChange}
        value={formFields?.[name]?.value}
        className="h-4 font-aperçu text-sm bg-[#222222] border-[#D9D9D9] border-b-[0.5px] focus:border-[#94C2A4] font-light focus:outline-none appearance-none pb-[.15rem] focus:shadow-red-400"
      />
      <div className="text-red-700 text-[0.625rem] italic leading-[.5rem]">
        {formFields?.[name]?.error || "\u00A0"}
      </div>
    </div>
  );
};

export default TextInputField;
