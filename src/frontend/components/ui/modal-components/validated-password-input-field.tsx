import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

import PasswordInvisibleIcon from "../../icons/password-invisible-icon";
import PasswordVisibleIcon from "../../icons/password-visible-icon";
import ToggleSwitch from "../toggle-switch/toggle-switch";

import { ValidatedTextFormFieldsType } from "@/types/component-props-types";
import InputFieldLabel from "./input-field-label";
import ErrorMessage from "./error-message";

type ValidatedPasswordInputFieldProps = {
  formFields: ValidatedTextFormFieldsType;
  setFormFields: Dispatch<SetStateAction<ValidatedTextFormFieldsType>>;
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
          autoComplete="new-password"
          onFocus={() => handleOnFocus()}
          onChange={handleOnChange}
          onBlur={() => handleOnBlur()}
          value={formFields.password?.value as string}
          aria-invalid={formFields.password?.errorMessage ? "true" : "false"}
          aria-describedby="passwordError"
          className="h-4 w-full appearance-none border-b border-black bg-transparent font-aperçu  text-black focus:border-b focus:outline-none dark:border-[#D9D9D9] md:text-xs"
        />
      </div>
      <div className="absolute -top-5 left-0 w-full">
        <label
          htmlFor="passwordID"
          className={` flex items-center justify-between  font-aperçu transition-transform duration-300 ${
            !isInputFieldFocused &&
            !formFields.password?.value &&
            "translate-y-5"
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

      <div
        id="passwordError"
        role="alert"
        className={` transition-opacity duration-500 ${
          formFields.password?.errorMessage ? "opacity-100" : "opacity-0"
        }`}
      >
        <ErrorMessage
          errorMessage={formFields.password?.errorMessage || "\u00A0"}
        />
      </div>
    </div>
  );
};

export default ValidatedPasswordInputField;
