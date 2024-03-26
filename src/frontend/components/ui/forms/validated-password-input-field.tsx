import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

import PasswordInvisibleIcon from "../../icons/password-invisible-icon";
import PasswordVisibleIcon from "../../icons/password-visible-icon";
import ToggleSwitch from "../toggle-switch/toggle-switch";

import { ValidatedFormFieldsType } from "@/types/component-props-types";

type ValidatedPasswordInputFieldProps = {
  formFields: ValidatedFormFieldsType;
  setFormFields: Dispatch<SetStateAction<ValidatedFormFieldsType>>;
};

const ValidatedPasswordInputField = ({
  formFields,
  setFormFields,
}: ValidatedPasswordInputFieldProps) => {
  const [isInputFieldFocused, setIsInputFieldFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormFields((previousFields) => ({
      ...previousFields,
      password: {
        ...previousFields.password,
        value: event.target.value,
      },
    }));
  };

  const handleOnFocus = () => {
    setIsInputFieldFocused(true);

    setFormFields((previousFields) => ({
      ...previousFields,
      password: {
        ...previousFields.password,
        errorMessage: "",
      },
    }));
  };

  const handleOnBlur = () => {
    setIsInputFieldFocused(false);

    setFormFields((previousFields) => ({
      ...previousFields,
      password: {
        ...previousFields.password,
        errorMessage: getInputFieldErrorMessage(
          previousFields.password?.value as string,
        ),
      },
    }));
  };

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((previousValue) => !previousValue);
  };

  const getInputFieldErrorMessage = (fieldValue: string) => {
    const validationFunction = formFields.password?.validationFunction!;
    return validationFunction(String(fieldValue).trim());
  };

  return (
    <div className="relative flex w-full flex-col space-y-1.5">
      <div>
        <input
          type={isPasswordVisible ? "text" : "password"}
          id="passwordID"
          name="password"
          autoComplete="false"
          onFocus={() => handleOnFocus()}
          onChange={handleOnChange}
          onBlur={() => handleOnBlur()}
          value={formFields.password?.value as string}
          aria-invalid={formFields.password?.errorMessage ? "true" : "false"}
          aria-describedby="passwordError"
          className="h-4 w-full appearance-none border-b border-black bg-neutral-300 pb-[.15rem] font-aperçu  text-black focus:border-b focus:outline-none dark:border-[#D9D9D9] dark:bg-[#222222] md:text-xs"
        />
      </div>
      <div className="absolute -top-5 left-0 w-full">
        <label
          htmlFor="passwordID"
          className={` flex items-center justify-between  font-aperçu text-sm font-extrabold leading-[.5rem] tracking-wide text-black transition-transform duration-300 small-caps dark:text-neutral-300 md:text-xs ${
            !isInputFieldFocused &&
            !formFields.password?.value &&
            "translate-y-5"
          }`}
        >
          password
          <span className="bg-green-400">
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

      <div
        id="passwordError"
        role="alert"
        className={` text-xs italic leading-[.5rem] text-red-500 transition-opacity duration-500 sm:text-[0.625rem] ${
          formFields.password.errorMessage ? "opacity-100" : "opacity-0"
        }`}
      >
        {formFields.password?.errorMessage || "\u00A0"}
      </div>
    </div>
  );
};

export default ValidatedPasswordInputField;
