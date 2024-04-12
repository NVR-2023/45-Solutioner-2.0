import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

import PasswordInvisibleIcon from "../../icons/password-invisible-icon";
import PasswordVisibleIcon from "../../icons/password-visible-icon";
import ToggleSwitch from "../toggle-switch/toggle-switch";

import InputFieldLabel from "./input-field-label";

type ValidatedPasswordInputFieldProps = {
  formFields: Record<string, string>;
  setFormFields: Dispatch<SetStateAction<Record<string, string>>>;
};

const RegularPasswordInputField = ({
  formFields,
  setFormFields,
}: ValidatedPasswordInputFieldProps) => {
  const [isInputFieldFocused, setIsInputFieldFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormFields((previousFields) => ({
      ...previousFields,
      password: event.target.value,
    }));
  };

  const handleOnFocus = () => {
    setIsInputFieldFocused(true);
  };

  const handleOnBlur = () => {
    setIsInputFieldFocused(false);
  };

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((previousValue) => !previousValue);
  };

  return (
    <div className="relative flex w-full flex-col space-y-1.5">
      <div>
        <input
          type={isPasswordVisible ? "text" : "password"}
          id="passwordID"
          name="password"
          autoComplete="new-password"
          onFocus={() => handleOnFocus()}
          onChange={handleOnChange}
          onBlur={() => handleOnBlur()}
          value={formFields.password as string}
          aria-describedby="passwordError"
          className="h-4 w-full appearance-none border-b border-black bg-neutral-300 font-aperçu  text-black focus:border-b focus:outline-none dark:border-[#D9D9D9] dark:bg-[#222222] md:text-xs"
        />
      </div>
      <div className="absolute -top-5 left-0 w-full">
        <label
          htmlFor="passwordID"
          className={` flex items-center justify-between  font-aperçu transition-transform duration-300 ${
            !isInputFieldFocused && !formFields.password && "translate-y-5"
          }`}
        >
          <InputFieldLabel label="password" />
          <span className="">
            <ToggleSwitch
              toggle={isPasswordVisible}
              setToggle={setIsPasswordVisible}
              firstIcon={PasswordInvisibleIcon}
              secondIcon={PasswordVisibleIcon}
              scale={0.45}
            />
          </span>
        </label>
      </div>
    </div>
  );
};

export default RegularPasswordInputField;
