import { ValidatedFormFieldsType } from "@/types/component-props-types";

const checkFormValidity = (formFields: ValidatedFormFieldsType) => {
  let isFormValid = true;
  for (let formField in formFields) {
    if (formFields[formField].errorMessage) {
      isFormValid = false;
      break;
    }
  }
  return isFormValid;
};

export default checkFormValidity;
