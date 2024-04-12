import { SyntheticEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ValidatedTextInputField from "@/frontend/components/ui/forms/validated-text-input-field";
import ValidatedPasswordInputField from "@/frontend/components/ui/forms/validated-password-input-field";
import ValidatedCheckbox from "@/frontend/components/ui/forms/validated-checkbox";
import hasAcceptedTermsOfUseSegment from "@/frontend/components/ui/forms/has-accepted-terms-of-use-segment";
import RegisterWIthSegment from "@/frontend/components/ui/forms/register-with-segment";
import SubmitSegment from "@/frontend/components/ui/forms/submit-segment";

import getErrorsInForm from "@/utils/functions/form-validation/get-errors-in-form";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";
import {
  ValidatedTextFormFieldsType,
  FetchSubmissionSTatusType,
  setFetchSubmissionStatusType,
  NewUserObjectType,
} from "@/types/component-props-types";

import { registerNNewUser } from "@/utils/functions/fetch-data/endpoint-submissions";
import { wait } from "@/utils/functions/wait";

const RegisterFormBody = () => {
  const router = useRouter();

  const validateName = INPUT_VALIDATION_FUNCTION_MAP.get("name")!;
  const validateEmail = INPUT_VALIDATION_FUNCTION_MAP.get("email")!;
  const validatePassword = INPUT_VALIDATION_FUNCTION_MAP.get("password")!;
  const validateHasAcceptedTermsOfUse = INPUT_VALIDATION_FUNCTION_MAP.get(
    "hasAcceptedTermsOfUse",
  )!;

  const [credentials, setCredentials] = useState<ValidatedTextFormFieldsType>({
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
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmissionStatus, setFormSubmissionStatus]: [
    FetchSubmissionSTatusType,
    setFetchSubmissionStatusType,
  ] = useState("idle");

  useEffect(() => {
    const isNameValid = !credentials.name.errorMessage;
    const isEmailValid = !credentials.email.errorMessage;
    const isPasswordValid = !credentials.password.errorMessage;
    const isTermsOfUseValid = !credentials.hasAcceptedTermsOfUse.errorMessage;

    const isNameFilled = credentials.name.value.trim() !== "";
    const isEmailFilled = credentials.email.value.trim() !== "";
    const isPasswordFilled = credentials.password.value.trim() !== "";
    const isTermsOfUseFilled =
      credentials.hasAcceptedTermsOfUse.value === "true";

    setIsFormValid(
      isNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isTermsOfUseValid &&
        isNameFilled &&
        isEmailFilled &&
        isPasswordFilled &&
        isTermsOfUseFilled,
    );
  }, [
    credentials.name.errorMessage,
    credentials.email.errorMessage,
    credentials.password.errorMessage,
    credentials.hasAcceptedTermsOfUse.errorMessage,
    credentials.name.value,
    credentials.email.value,
    credentials.password.value,
    credentials.hasAcceptedTermsOfUse.value,
  ]);

  const handleOnCancel = (event: SyntheticEvent) => {
    event.preventDefault();
    router.push("/");
  };

  const handleOnsubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const newUserObject: NewUserObjectType = {
      name: credentials.name.value as string,
      email: credentials.email.value as string,
      password: credentials.password.value as string,
      hasAcceptedTermsOfUse: credentials.hasAcceptedTermsOfUse.value as string,
    };

    getErrorsInForm({
      setFormFields: setCredentials,
      formFields: credentials,
    });

    if (!isFormValid) {
      return;
    } else {
      const registerNewUserResponse = await registerNNewUser(
        newUserObject,
        setFormSubmissionStatus,
      );
      await wait(1000);
      if (!registerNewUserResponse?.data?.ok) {
        let updatedCredentials = { ...credentials };
        const submissionErrorList =
          registerNewUserResponse?.data?.errors?.validationErrors ?? null;
        for (let invalidInput in submissionErrorList) {
          updatedCredentials[invalidInput].errorMessage =
            submissionErrorList[invalidInput];
        }
        setCredentials(updatedCredentials);
        setFormSubmissionStatus("re-idle");
      } else {
        setFormSubmissionStatus("re-idle");
      }
    }
  };

  return (
    <form className="flex h-full w-full flex-col justify-center space-y-4">
      <div className="space-y-6">
        <div>
          <ValidatedTextInputField
            name="name"
            formFields={credentials}
            setFormFields={setCredentials}
          />
        </div>
        <div>
          <ValidatedTextInputField
            name="email"
            formFields={credentials}
            setFormFields={setCredentials}
          />
        </div>
        <div>
          <ValidatedPasswordInputField
            formFields={credentials}
            setFormFields={setCredentials}
          />
        </div>
      </div>
      <div className="space-y-5">
        <div className="space-y-3">
          <div className="">
            <ValidatedCheckbox
              name="hasAcceptedTermsOfUse"
              formFields={credentials}
              setFormFields={setCredentials}
              notice={hasAcceptedTermsOfUseSegment}
            />
          </div>
          <div>
            <RegisterWIthSegment />
          </div>
        </div>
        <div className="">
          <SubmitSegment
            onCancel={handleOnCancel}
            onSubmit={handleOnsubmit}
            formSubmissionStatus={formSubmissionStatus}
          />
        </div>
      </div>
    </form>
  );
};

export default RegisterFormBody;
