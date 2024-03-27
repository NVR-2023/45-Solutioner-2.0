import {
  useState,
  useRef,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from "react";
import { useRouter } from "next/navigation";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";
import { ValidatedFormFieldsType } from "@/types/component-props-types";


type FormSubmissionStatusStateType = string;
type FormSubmissionStatusSetterType = Dispatch<SetStateAction<string>>;

export const useRegisterFormDataSetup = () => {

  const validateName = INPUT_VALIDATION_FUNCTION_MAP.get("name")!;
  const validateEmail = INPUT_VALIDATION_FUNCTION_MAP.get("email")!;
  const validatePassword = INPUT_VALIDATION_FUNCTION_MAP.get("password")!;
  const validateHasAcceptedTermsOfUse = INPUT_VALIDATION_FUNCTION_MAP.get(
    "hasAcceptedTermsOfUse",
  )!;

  const defaultCredentials = {
    name: { value: "", validationFunction: validateName, errorMessage: "" },
    email: {
      value: "",
      validationFunction: validateEmail,
      errorMessage: "",
    },
    password: {
      value: "",
      validationFunction: validatePassword,
      errorMessage: "",
    },
    hasAcceptedTermsOfUse: {
      value: "false",
      validationFunction: validateHasAcceptedTermsOfUse,
      errorMessage: "",
    },
  };

  const router = useRouter();
  let isFormValid: MutableRefObject<boolean> = useRef(false);

  const [credentials, setCredentials] =
    useState<ValidatedFormFieldsType>(defaultCredentials);

  const [formSubmissionStatus, setFormSubmissionStatus]: [
    FormSubmissionStatusStateType,
    FormSubmissionStatusSetterType,
  ] = useState("idle");

  return {
    defaultCredentials,
    router,
    isFormValid,
    credentials,
    setCredentials,
    formSubmissionStatus,
    setFormSubmissionStatus,
  };
};
