import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import ValidatedTextInputField from "@/frontend/components/ui/forms/validated-text-input-field";
import ValidatedCheckbox from "@/frontend/components/ui/forms/validated-checkbox";
import RegisterWIthSegment from "@/frontend/components/ui/forms/register-with-segment";
import SubmitSegment from "@/frontend/components/ui/forms/submit-segment";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";
import { ValidatedFormFieldsType } from "@/types/component-props-types";

const RegisterFormBody = () => {
  const validateName = INPUT_VALIDATION_FUNCTION_MAP.get("name")!;
  const validateEmail = INPUT_VALIDATION_FUNCTION_MAP.get("email")!;
  const validatePassword = INPUT_VALIDATION_FUNCTION_MAP.get("password")!;
  const validateHasAcceptedTermsOfUse = INPUT_VALIDATION_FUNCTION_MAP.get(
    "hasAcceptedTermsOfUse",
  )!;

  const [credentials, setCredentials] = useState<ValidatedFormFieldsType>({
    name: { value: "", validationFunction: validateName, errorMessage: "" },
    email: { value: "", validationFunction: validateEmail, errorMessage: "" },
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

  const router = useRouter();

  const handleOnCancel = (event: SyntheticEvent) => {
    event.preventDefault();
    router.push("/");
  };

  const handleOnsubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    setCredentials((previousCredentials) => {
      let updatedCredentials = { ...previousCredentials };

      for (const key in updatedCredentials) {
        const fieldValue = updatedCredentials[key].value;
        const validationFunction = updatedCredentials[key].validationFunction!;
        const validationError = validationFunction(fieldValue);

        updatedCredentials = {
          ...updatedCredentials,
          [key]: {
            ...updatedCredentials[key],
            errorMessage: validationError,
          },
        };
      }
      return updatedCredentials;
    });
  };

  const hasAcceptedTermsOfUseNotice = (
    <div className="h-full font-aperçu text-xs font-semibold tracking-normal">
      <span>I agree to the</span>
      <span className="border-b border-transparent hover:border-b-black">
        <Link href="/termsofuse">Terms of Use</Link>
      </span>
    </div>
  );

  return (
    <main className="grid h-full w-full grid-cols-12">
      <div className="col-span-2"></div>
      <div className="col-span-8 flex justify-center">
        <form method="post" className="w-full space-y-4 pt-8">
          <div className="space-y-7">
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
            <div className="space-y-1">
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
