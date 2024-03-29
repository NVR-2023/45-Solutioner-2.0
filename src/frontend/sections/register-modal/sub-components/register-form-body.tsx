import { SyntheticEvent, useState, useRef, MutableRefObject } from "react";

import ValidatedTextInputField from "@/frontend/components/ui/forms/validated-text-input-field";
import ValidatedPasswordInputField from "@/frontend/components/ui/forms/validated-password-input-field";
import ValidatedCheckbox from "@/frontend/components/ui/forms/validated-checkbox";
import hasAcceptedTermsOfUseNotice from "@/frontend/components/ui/forms/has-accepted-terms-of-use";
import RegisterWIthSegment from "@/frontend/components/ui/forms/register-with-segment";
import SubmitSegment from "@/frontend/components/ui/forms/submit-segment";

import getErrorsInForm from "@/utils/functions/form-validation/get-errors-in-form";
import { fetchSubmission } from "@/utils/functions/fetch-data/fetch-submission";
import { useRouter } from "next/navigation";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";
import {
  ValidatedFormFieldsType,
  FetchSubmissionSTatusType,
  setFetchSubmissionStatusType,
} from "@/types/component-props-types";

import { sleep } from "@/utils/functions/sleep";

type NewUserObjectType = {
  name: string;
  email: string;
  password: string;
  hasAcceptedTermsOfUse: string;
};

const RegisterFormBody = () => {
  const validateName = INPUT_VALIDATION_FUNCTION_MAP.get("name")!;
  const validateEmail = INPUT_VALIDATION_FUNCTION_MAP.get("email")!;
  const validatePassword = INPUT_VALIDATION_FUNCTION_MAP.get("password")!;
  const validateHasAcceptedTermsOfUse = INPUT_VALIDATION_FUNCTION_MAP.get(
    "hasAcceptedTermsOfUse",
  )!;

  const router = useRouter();
  let isFormValid: MutableRefObject<boolean> = useRef(false);

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

  const [formSubmissionStatus, setFormSubmissionStatus]: [
    FetchSubmissionSTatusType,
    setFetchSubmissionStatusType,
  ] = useState("idle");

  const handleOnCancel = (event: SyntheticEvent) => {
    event.preventDefault();
    router.push("/");
  };

  const handleOnsubmit = async (event: SyntheticEvent) => {
    
    let createNewUserFetchSubmissionResponse: any;
    
    const createNewUser = async () => {
      const newUserObject: NewUserObjectType = {
        name: credentials.name.value as string,
        email: credentials.email.value as string,
        password: credentials.password.value as string,
        hasAcceptedTermsOfUse: credentials.hasAcceptedTermsOfUse
          .value as string,
      };
      createNewUserFetchSubmissionResponse = await fetchSubmission({
        method: "POST",
        url: "/api/users",
        body: newUserObject,
        setFetchSubmissionStatus: setFormSubmissionStatus,
      });
      console.log(
        createNewUserFetchSubmissionResponse.fetchSubmissionResponseData,
      );
    };

    event.preventDefault();
    getErrorsInForm({
      isFormValid: isFormValid,
      formFields: credentials,
      setFormFields: setCredentials,
    })!;

    if (isFormValid.current) {
      createNewUser();
    }

    await sleep(3000);
    setFormSubmissionStatus("idle");

    if (createNewUserFetchSubmissionResponse?.fetchSubmissionResponseData) {
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
