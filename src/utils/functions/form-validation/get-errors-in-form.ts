import { Dispatch, SetStateAction, MutableRefObject } from "react";
import { ValidatedFormFieldsType } from "@/types/component-props-types";

type ValidateFormProps = {
  isFormValid: MutableRefObject<boolean>;
  formFields: ValidatedFormFieldsType;
  setFormFields: Dispatch<SetStateAction<ValidatedFormFieldsType>>;
};

const getErrorsInForm = ({
  isFormValid,
  formFields,
  setFormFields,
}: ValidateFormProps) => {
  let updatedFormFields = { ...formFields };

  isFormValid.current = true;
  for (const formField in updatedFormFields) {
    const fieldValue = updatedFormFields[formField].value;
    const validationFunction = updatedFormFields[formField].validationFunction!;
    const validationError = validationFunction(fieldValue);

    if (validationError) {
      isFormValid.current = false;
      updatedFormFields = {
        ...updatedFormFields,
        [formField]: {
          ...updatedFormFields[formField],
          errorMessage: validationError,
        },
      };
    }
  }

  setFormFields(updatedFormFields);
};

export default getErrorsInForm;
