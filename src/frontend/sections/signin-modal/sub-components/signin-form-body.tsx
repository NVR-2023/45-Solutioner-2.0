import { Dispatch, SetStateAction } from "react";
import { KeyboardEvent, SyntheticEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ValidatedTextInputField from "@/frontend/components/ui/modal-components/validated-text-input-field";
import ValidatedPasswordInputField from "@/frontend/components/ui/modal-components/validated-password-input-field";
import ForgotPasswordSegment from "@/frontend/components/ui/modal-components/forgot-password-segment";
import SigninWIthSegment from "@/frontend/components/ui/modal-components/signin-with-segement";
import SubmitSegment from "@/frontend/components/ui/modal-components/submit-segment";

import getErrorsInForm from "@/utils/functions/form-validation/get-errors-in-form";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";
import {
  ValidatedTextFormFieldsType,
  FetchSubmissionSTatusType,
  setFetchSubmissionStatusType,
  SigninUserObjectType,
} from "@/types/component-props-types";

import { signInUser } from "@/utils/functions/fetch-data/user-endpoint-submissions";
import { wait } from "@/utils/functions/wait";

type SigninFormBodyProps = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};
const SigninFormBody = ({ setIsModalOpen }: SigninFormBodyProps) => {
  const router = useRouter();

  const validateEmail = INPUT_VALIDATION_FUNCTION_MAP.get("email")!;
  const validatePassword = INPUT_VALIDATION_FUNCTION_MAP.get("password")!;

  const [credentials, setCredentials] = useState<ValidatedTextFormFieldsType>({
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
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmissionStatus, setFormSubmissionStatus]: [
    FetchSubmissionSTatusType,
    setFetchSubmissionStatusType,
  ] = useState("idle");

  useEffect(() => {
    const isEmailValid = !credentials.email.errorMessage;
    const isPasswordValid = !credentials.password.errorMessage;

    const isEmailFilled = credentials.email.value.trim() !== "";
    const isPasswordFilled = credentials.password.value.trim() !== "";

    setIsFormValid(
      isEmailValid && isPasswordValid && isEmailFilled && isPasswordFilled,
    );
  }, [
    credentials.email.errorMessage,
    credentials.password.errorMessage,
    credentials.email.value,
    credentials.password.value,
  ]);

  const handleOnCancel = async (event: SyntheticEvent) => {
    event.preventDefault();
    setIsModalOpen(false);
    await wait(450);
    router.push("/");
  };

  const handleOnsubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const SigninUserrObject: SigninUserObjectType = {
      email: credentials.email.value as string,
      password: credentials.password.value as string,
    };

    getErrorsInForm({
      setFormFields: setCredentials,
      formFields: credentials,
    });

    if (!isFormValid) {
      return;
    } else {
      const signinUserResponse = await signInUser(
        SigninUserrObject,
        setFormSubmissionStatus,
      );
      // wait 1 second not to give hints to malicious actors
      //await wait(1000);
      if (!signinUserResponse?.data?.ok) {
        let updatedCredentials = { ...credentials };
        const submissionErrorList =
          signinUserResponse?.data?.errors?.validationErrors ?? null;
        for (let invalidInput in submissionErrorList) {
          updatedCredentials[invalidInput].errorMessage =
            submissionErrorList[invalidInput];
        }
        setCredentials(updatedCredentials);
        setFormSubmissionStatus("re-idle");
      } else {
        await wait(450);
        setIsModalOpen(false);
        router.push("/private/main/book");
      }
    }
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleOnsubmit(event);
    }
  };

  return (
    <form
      onKeyDown={handleOnKeyDown}
      className="flex h-full w-full flex-col justify-center space-y-4"
    >
      <div className="space-y-6">
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
      <div className="space-y-8">
        <div className="space-y-3">
          <div>
            <ForgotPasswordSegment />
          </div>
          <div>
            <SigninWIthSegment />
          </div>
        </div>
        <div className="">
          <SubmitSegment
            onCancel={handleOnCancel}
            onSubmit={handleOnsubmit}
            submitAction="sign in"
            formSubmissionStatus={formSubmissionStatus}
          />
        </div>
      </div>
    </form>
  );
};

export default SigninFormBody;
