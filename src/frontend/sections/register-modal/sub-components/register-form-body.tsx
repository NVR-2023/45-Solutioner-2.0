import { SyntheticEvent, useState, useEffect } from "react";

import ValidatedTextInputField from "@/frontend/components/ui/forms/validated-text-input-field";
import ValidatedPasswordInputField from "@/frontend/components/ui/forms/validated-password-input-field";
import ValidatedCheckbox from "@/frontend/components/ui/forms/validated-checkbox";
import hasAcceptedTermsOfUseNotice from "@/frontend/components/ui/forms/has-accepted-terms-of-use";
import RegisterWIthSegment from "@/frontend/components/ui/forms/register-with-segment";
import SubmitSegment from "@/frontend/components/ui/forms/submit-segment";
import { useRegisterFormDataSetup } from "../../../hooks/register-form-hooks/use-register-form-setup-data";

import getErrorsInForm from "@/utils/functions/form-validation/get-errors-in-form";
import { fetchSubmission } from "@/utils/functions/fetch-data/fetch-submission";

type NewUserObjectType = {
  name: string;
  email: string;
  password: string;
  hasAcceptedTermsOfUse: string;
};

const RegisterFormBody = () => {

  const {
    defaultCredentials,
    router,
    isFormValid,
    credentials,
    setCredentials,
    formSubmissionStatus,
    setFormSubmissionStatus,
  } = useRegisterFormDataSetup();

  useEffect(() => {
    if (
      formSubmissionStatus === "executed" ||
      formSubmissionStatus === "aborted" ||
      formSubmissionStatus === "finished"
    ) {
      isFormValid.current = false;
      setCredentials(defaultCredentials);
      setFormSubmissionStatus("");
    }
  }, [formSubmissionStatus]);

  const handleOnCancel = (event: SyntheticEvent) => {
    event.preventDefault();
    router.push("/");
  };

  const handleOnsubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    getErrorsInForm({
      isFormValid: isFormValid,
      formFields: credentials,
      setFormFields: setCredentials,
    })!;

    const createNewUser = async () => {
      const newUserObject: NewUserObjectType = {
        name: credentials.name.value as string,
        email: credentials.email.value as string,
        password: credentials.password.value as string,
        hasAcceptedTermsOfUse: credentials.hasAcceptedTermsOfUse
          .value as string,
      };
      const response = await fetchSubmission({
        method: "POST",
        url: "/api/users",
        body: newUserObject,
        setFetchSubmissionStatus: setFormSubmissionStatus,
      });
      console.log(response.fetchSubmissionResponseData);
    };

    if (isFormValid.current) {
      createNewUser();
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
