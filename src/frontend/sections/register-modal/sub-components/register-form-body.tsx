import { SyntheticEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ValidatedTextInputField from "@/frontend/components/ui/forms/validated-text-input-field";
import ValidatedCheckbox from "@/frontend/components/ui/forms/validated-checkbox";
import hasAcceptedTermsOfUseNotice from "@/frontend/components/ui/forms/has-accepted-terms-of-use";
import RegisterWIthSegment from "@/frontend/components/ui/forms/register-with-segment";
import SubmitSegment from "@/frontend/components/ui/forms/submit-segment";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";
import { ValidatedFormFieldsType } from "@/types/component-props-types";

import getErrorsInForm from "@/utils/functions/form-validation/get-errors-in-form";

const RegisterFormBody = () => {
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
  useEffect(() => {
    const hasErrors =
      !credentials.name.value ||
      !credentials.email.value ||
      !credentials.password.value ||
      !credentials.hasAcceptedTermsOfUse.value ||
      credentials.name.errorMessage ||
      credentials.email.errorMessage ||
      credentials.password.errorMessage ||
      credentials.hasAcceptedTermsOfUse.errorMessage;
    setIsFormValid(!hasErrors);
  }, [
    credentials.name.value,
    credentials.email.value,
    credentials.password.value,
    credentials.hasAcceptedTermsOfUse.value,
    credentials.name.errorMessage,
    credentials.email.errorMessage,
    credentials.password.errorMessage,
    credentials.hasAcceptedTermsOfUse.errorMessage,
  ]);

  const router = useRouter();
  const handleOnCancel = (event: SyntheticEvent) => {
    event.preventDefault();
    router.push("/");
  };

  const handleOnsubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    getErrorsInForm({
      setFormFields: setCredentials,
    })!;

    if (isFormValid) {
      console.log("Form is valid");
    } else {
      console.log("Form has errors");
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
              <ValidatedTextInputField
                name="password"
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
