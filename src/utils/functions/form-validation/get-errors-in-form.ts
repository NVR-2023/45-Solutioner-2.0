import { Dispatch, SetStateAction } from "react";
import { ValidatedTextFormFieldsType } from "@/types/component-props-types";

type ValidateFormProps = {
  formFields: ValidatedTextFormFieldsType;
  setFormFields: Dispatch<SetStateAction<ValidatedTextFormFieldsType>>;
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
