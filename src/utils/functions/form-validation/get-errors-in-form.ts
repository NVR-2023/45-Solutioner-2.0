import { Dispatch, SetStateAction } from "react";
import { ValidatedFormFieldsType } from "@/types/component-props-types";

type ValidateFormProps = {
  setFormFields: Dispatch<SetStateAction<ValidatedFormFieldsType>>;
};

const getErrorsInForm = ({ setFormFields }: ValidateFormProps) => {
  setFormFields((previousCredentials) => {
    let updatedCredentials = { ...previousCredentials };

    for (const key in updatedCredentials) {
      const fieldValue = updatedCredentials[key].value;
      const validationFunction = updatedCredentials[key].validationFunction!;
      const validationError = validationFunction(fieldValue);
      updatedCredentials = {
        ...updatedCredentials,
        [key]: {
          ...updatedCredentials[key],
          errorMessage: validationError,
        },
      };
    }
    return updatedCredentials;
  });
};

export default getErrorsInForm;
