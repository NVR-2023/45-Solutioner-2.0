import { FormEvent, useState } from "react";
import TextInputField from "@/frontend/components/ui/forms/text-input-field";
import Link from "next/link";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";

import TermsOfServiceInput from "@/frontend/components/ui/forms/terms-of-service-input";
import RegisterWIthSegment from "@/frontend/components/ui/forms/register-with-segment";
import BasicButton from "@/frontend/components/ui/basic-button/basic-button";
import { ValidatedFormFieldsType } from "@/types/component-props-types";



const validateName = INPUT_VALIDATION_FUNCTION_MAP.get("name")!;
const validateEmail = INPUT_VALIDATION_FUNCTION_MAP.get("email")!;
const validatePassword = INPUT_VALIDATION_FUNCTION_MAP.get("password")!;

const RegisterFormBody = () => {
  const [credentials, setCredentials] = useState<ValidatedFormFieldsType>({
    name: { value: "", validationFunction: validateName, errorMessage: "" },
    email: { value: "", validationFunction: validateEmail, errorMessage: "" },
    password: {
      value: "",
      validationFunction: validatePassword,
      errorMessage: "",
    },
    hasAcceptedTermsOfUse: { value: false, errorMessage: "" },
  });

const handleOnsubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  // Validate input fields
  const nameValidationError = validateName(credentials.name.value as string);
  const emailValidationError = validateEmail(credentials.email.value as string);
  const passwordValidationError = validatePassword(
    credentials.password.value as string,
  );

  // Update credentials state based on validation results
  setCredentials((previousCredentials) => ({
    ...previousCredentials,
    name: {
      ...previousCredentials.name,
      errorMessage: nameValidationError,
    },
    email: {
      ...previousCredentials.email,
      errorMessage: emailValidationError,
    },
    password: {
      ...previousCredentials.password,
      errorMessage: passwordValidationError,
    },
  }));
};


  return (
    <main className="grid h-full w-full grid-cols-12">
      <div className="col-span-2"></div>
      <div className="col-span-8 flex justify-center">
        <form method="post" className="w-full space-y-4 pt-8">
          <div className="space-y-7">
            <div>
              <TextInputField
                name="name"
                formFields={credentials}
                setFormFields={setCredentials}
              />
            </div>
            <div>
              <TextInputField
                name="email"
                formFields={credentials}
                setFormFields={setCredentials}
              />
            </div>
            <div>
              <TextInputField
                name="password"
                formFields={credentials}
                setFormFields={setCredentials}
              />
            </div>
          </div>
          <div className="space-y-7">
            <div className="space-y-1">
              <TermsOfServiceInput />
              <RegisterWIthSegment />
            </div>
            <div className="">
              <div className="flex justify-between">
                <BasicButton size={"sm"} type={"outlined"}>
                  <Link href="/">cancel</Link>
                </BasicButton>
                <BasicButton
                  onClick={handleOnsubmit}
                  size={"md"}
                  type={"filled"}
                >
                  register
                </BasicButton>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="col-span-2"></div>
    </main>
  );
};

export default RegisterFormBody;
