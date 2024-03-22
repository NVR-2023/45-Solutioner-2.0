import { SyntheticEvent, Dispatch, SetStateAction, useState } from "react";
import ValidatedTextInputField from "@/frontend/components/ui/forms/validated-text-input-field";
import Link from "next/link";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";

import ValidatedCheckbox from "@/frontend/components/ui/forms/validated-checkbox";
import RegisterWIthSegment from "@/frontend/components/ui/forms/register-with-segment";
import BasicButton from "@/frontend/components/ui/basic-button/basic-button";
import { ValidatedFormFieldsType } from "@/types/component-props-types";

const RegisterFormBody = () => {
  const validateName = INPUT_VALIDATION_FUNCTION_MAP.get("name")!;
  const validateEmail = INPUT_VALIDATION_FUNCTION_MAP.get("email")!;
  const validatePassword = INPUT_VALIDATION_FUNCTION_MAP.get("password")!;
  const validateHasAcceptedTermsOfUse = (hasAcceptedTermsOfUse: boolean) => {
    return !hasAcceptedTermsOfUse ? "You must accept Terms of Use" : "";
  };

  const [credentials, setCredentials] = useState<ValidatedFormFieldsType>({
    name: { value: "", validationFunction: validateName, errorMessage: "" },
    email: { value: "", validationFunction: validateEmail, errorMessage: "" },
    password: {
      value: "",
      validationFunction: validatePassword,
      errorMessage: "",
    },
    hasAcceptedTermsOfUse: {
      value: false,
      validationFunction: validateHasAcceptedTermsOfUse,
      errorMessage: "",
    },
  });

  /*   const handleOnsubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const nameValidationError = validateName(credentials.name.value as string);
    const emailValidationError = validateEmail(
      credentials.email.value as string,
    );
    const passwordValidationError = validatePassword(
      credentials.password.value as string,
    );
    const hasAcceptedTermsOfUseError = validateHasAcceptedTermsOfUse(credentials.hasAcceptedTermsOfUse.value as boolean);

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
      hasAcceptedTermsOfUse: {
        ...previousCredentials.hasAcceptedTermsOfUse,
        errorMessage: hasAcceptedTermsOfUseError,
      },
    }));
  }; */

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
                >
                  <div className="h-full font-aperçu text-xs font-semibold tracking-normal">
                    I agree to the{" "}
                    <span className="border-b border-transparent hover:border-b-black">
                      <Link href="/termsofuse">Terms of Use</Link>
                    </span>
                  </div>
                </ValidatedCheckbox>
              </div>
              <div>
                <RegisterWIthSegment />
              </div>
            </div>
            <div className="">
              <div className="flex justify-between">
                <BasicButton size={"sm"} type={"outlined"}>
                  <Link href="/">cancel</Link>
                </BasicButton>
                <BasicButton
                  onClick={(event: SyntheticEvent) => {
                    handleOnsubmit(event);
                  }}
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
