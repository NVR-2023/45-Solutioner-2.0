import {
  SyntheticEvent,
  useState,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";
import { useRouter } from "next/navigation";

import ValidatedTextInputField from "@/frontend/components/ui/forms/validated-text-input-field";
import ValidatedPasswordInputField from "@/frontend/components/ui/forms/validated-password-input-field";

import ValidatedCheckbox from "@/frontend/components/ui/forms/validated-checkbox";
import hasAcceptedTermsOfUseNotice from "@/frontend/components/ui/forms/has-accepted-terms-of-use";
import RegisterWIthSegment from "@/frontend/components/ui/forms/register-with-segment";
import SubmitSegment from "@/frontend/components/ui/forms/submit-segment";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";
import { ValidatedFormFieldsType } from "@/types/component-props-types";

import getErrorsInForm from "@/utils/functions/form-validation/get-errors-in-form";
import {
  NewUserObjectType,
  createNewUser,
} from "@/utils/functions/fetch-data/endpoint-fetch-functions";

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

  const router = useRouter();
  let isFormValid: MutableRefObject<boolean> = useRef(false);

  useEffect(() => {
    const createNewUserFromForm = async () => {
      const newUserObject: NewUserObjectType = {
        name: credentials.name.value as string,
        email: credentials.email.value as string,
        password: credentials.password.value as string,
        hasAcceptedTermsOfUse: credentials.hasAcceptedTermsOfUse
          .value as string,
      };
      const response = await createNewUser(newUserObject);
      console.log(response.data);
    };

    if (isFormValid.current) {
      createNewUserFromForm();
    }
  }, [credentials, isFormValid]);

  
  const handleOnCancel = (event: SyntheticEvent) => {
    event.preventDefault();
    router.push("/");
  };

  const handleOnsubmit: any = (event: SyntheticEvent) => {
    event.preventDefault();
    getErrorsInForm({
      isFormValid: isFormValid,
      formFields: credentials,
      setFormFields: setCredentials,
    })!;
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
