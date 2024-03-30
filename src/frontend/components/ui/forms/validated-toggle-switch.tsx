import { ComponentType, Dispatch, SetStateAction, useCallback } from "react";
import { ValidatedTextFormFieldsType } from "@/types/component-props-types";

type IconType = ComponentType<{ scale: number; color: string }>;
type ValidatedToggleProps = {
  firstIcon: IconType;
  secondIcon: IconType;
  name: string;
  formFields: ValidatedTextFormFieldsType;
  setFormFields: Dispatch<SetStateAction<ValidatedTextFormFieldsType>>;
  scale?: number;
  color?: string;
};

const ValidatedToggleSwitch = ({
  firstIcon: FirstIcon,
  secondIcon: SecondIcon,
  name,
  formFields,
  setFormFields,
  scale = 1,
  color = "currentColor",
}: ValidatedToggleProps) => {
  const handleOnToggle = useCallback(() => {
    setFormFields((previousFields) => {
      const previousFieldValue = previousFields[name].value;
      const newFieldValue =
        typeof previousFieldValue === "boolean"
          ? !previousFieldValue
          : previousFieldValue === "true"
            ? "false"
            : "true";

      const validationFunction = formFields[name].validationFunction!;
      const errorMessage = validationFunction(newFieldValue);

      return {
        ...previousFields,
        [name]: {
          ...previousFields[name],
          value: newFieldValue,
          errorMessage: errorMessage,
        },
      };
    });
  }, [name, formFields, setFormFields]);

  return (
    <button
      type="button"
      className="flex h-full w-full items-center justify-center"
      onClick={handleOnToggle}
      role="toggle"
      aria-label={
        formFields[name]?.value === "true" ? "Toggle Off" : "Toggle On"
      }
    >
      <div className="relative">
        <div
          className={`absolute top-1/2 -translate-y-1/2 transform transition-opacity duration-500 ${
            formFields[name]?.value === "true" ? "opacity-0" : "opacity-100"
          }`}
        >
          <FirstIcon scale={scale} color={color} />
        </div>
        <div
          className={`absolute top-1/2 -translate-y-1/2 transform transition-opacity duration-500 ${
            formFields[name]?.value === "true" ? "opacity-100" : "opacity-0"
          }`}
        >
          <SecondIcon scale={scale} color={color} />
        </div>
      </div>
    </button>
  );
};

export default ValidatedToggleSwitch;
