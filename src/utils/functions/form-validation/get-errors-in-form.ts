import { Dispatch, SetStateAction } from "react";
import { ValidatedFormFieldsType } from "@/types/component-props-types";

type ValidateFormProps = {
  formFields: ValidatedFormFieldsType;
  setFormFields: Dispatch<SetStateAction<ValidatedFormFieldsType>>;
};

const getErrorsInForm = ({ formFields, setFormFields }: ValidateFormProps) => {
  let updatedFormFields = { ...formFields };

  for (const formField in updatedFormFields) {
    const fieldValue = updatedFormFields[formField].value;
    const validationFunction = updatedFormFields[formField].validationFunction!;
    const validationError = validationFunction(fieldValue);

    if (validationError) {
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
