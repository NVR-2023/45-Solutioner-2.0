import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

import RegularTextInputField from "@/frontend/components/ui/forms/regular-text-input-field";
import RegularPasswordInputField from "@/frontend/components/ui/forms/regular-password-input-field";
import RegisterWIthSegment from "@/frontend/components/ui/forms/register-with-segment";
import SubmitSegment from "@/frontend/components/ui/forms/submit-segment";

import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";
import {
  FetchSubmissionSTatusType,
  setFetchSubmissionStatusType,
  SigninCredentialsType,
} from "@/types/component-props-types";

import { registerNNewUser } from "@/utils/functions/fetch-data/endpoint-submissions";
import { wait } from "@/utils/functions/wait";

const SigninrFormBody = () => {
  const router = useRouter();

  const validateEmail = INPUT_VALIDATION_FUNCTION_MAP.get("email")!;
  const validatePassword = INPUT_VALIDATION_FUNCTION_MAP.get("password")!;

  const [credentials, setCredentials] = useState<Record<string, string>>({
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmissionStatus, setFormSubmissionStatus]: [
    FetchSubmissionSTatusType,
    setFetchSubmissionStatusType,
  ] = useState("idle");


  const handleOnCancel = (event: SyntheticEvent) => {
    event.preventDefault();
    router.push("/");
  };

  const handleOnsubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const SigninCredentials: SigninCredentialsType = {
      email: credentials.email as string,
      password: credentials.password as string,
    };

   /*  getErrorsInForm({
      setFormFields: setCredentials,
      formFields: credentials,
    }); */

/*     if (!isFormValid) {
      return;
    } else {
      const registerNewUserResponse = await registerNNewUser(
        SigninCredentials,
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
    } */
  };

  return (
    <form className="flex h-full w-full flex-col justify-center space-y-4">
      <div className="space-y-6">
        <div>
          <RegularTextInputField
            name="email"
            formFields={credentials}
            setFormFields={setCredentials}
          />
        </div>
        <div>
          <RegularPasswordInputField
            formFields={credentials}
            setFormFields={setCredentials}
          />
        </div>
      </div>
      <div className="space-y-8">
        <div className="space-y-3">
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

export default SigninrFormBody;
