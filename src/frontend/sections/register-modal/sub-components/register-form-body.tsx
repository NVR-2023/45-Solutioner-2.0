import { SyntheticEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ValidatedTextInputField from "@/frontend/components/ui/forms/validated-text-input-field";
import ValidatedPasswordInputField from "@/frontend/components/ui/forms/validated-password-input-field";
import ValidatedCheckbox from "@/frontend/components/ui/forms/validated-checkbox";
import hasAcceptedTermsOfUseNotice from "@/frontend/components/ui/forms/has-accepted-terms-of-use";
import RegisterWIthSegment from "@/frontend/components/ui/forms/register-with-segment";
import SubmitSegment from "@/frontend/components/ui/forms/submit-segment";

import getErrorsInForm from "@/utils/functions/form-validation/get-errors-in-form";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";
import {
  ValidatedFormFieldsType,
  FetchSubmissionSTatusType,
  setFetchSubmissionStatusType,
  NewUserObjectType,
} from "@/types/component-props-types";

import { createNewUser } from "@/utils/functions/fetch-data/endpoint-submissions";
import { wait } from "@/utils/functions/wait";

const RegisterFormBody = () => {
  const router = useRouter();

  const validateName = INPUT_VALIDATION_FUNCTION_MAP.get("name")!;
  const validateEmail = INPUT_VALIDATION_FUNCTION_MAP.get("email")!;
  const validatePassword = INPUT_VALIDATION_FUNCTION_MAP.get("password")!;
  const validateHasAcceptedTermsOfUse = INPUT_VALIDATION_FUNCTION_MAP.get(
    "hasAcceptedTermsOfUse",
  )!;

  const [credentials, setCredentials] = useState<ValidatedFormFieldsType>({
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

    const isNameFilled = String(credentials.name.value).trim() !== "";
    const isEmailFilled = String(credentials.email.value).trim() !== "";
    const isPasswordFilled = String(credentials.password.value).trim() !== "";

    setIsFormValid(
      isNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isTermsOfUseValid &&
        isNameFilled &&
        isEmailFilled &&
        isPasswordFilled,
    );
  }, [
    credentials.name.errorMessage,
    credentials.email.errorMessage,
    credentials.password.errorMessage,
    credentials.hasAcceptedTermsOfUse.errorMessage,
    credentials.name.value,
    credentials.email.value,
    credentials.password.value,
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
      const createNewUserResponse = await createNewUser(
        newUserObject,
        setFormSubmissionStatus,
      );
      await wait(1000);
      if (!createNewUserResponse?.data?.ok) {
        let updatedCredentials = { ...credentials };
        const submissionErrorList =
          createNewUserResponse?.data?.errors?.validationErrors ?? null;
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
    <main className="grid h-full w-full grid-cols-12">
      <div className="col-span-2"></div>
      <div className="col-span-8 flex justify-center">
        <form method="post" className="w-full space-y-4 pt-8">
          <div className="space-y-8">
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
          <div className="space-y-7">
            <div className="space-y-4">
              <div className="">
                <ValidatedCheckbox
                  name="hasAcceptedTermsOfUse"
                  formFields={credentials}
                  setFormFields={setCredentials}
                  notice={hasAcceptedTermsOfUseNotice}
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
      </div>
      <div className="col-span-2"></div>
    </main>
  );
};

export default RegisterFormBody;
