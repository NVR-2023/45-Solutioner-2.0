import { useState } from "react";
import TextInputField from "@/frontend/components/ui/forms/text-input-field";

import TermsOfServiceInput from "@/frontend/components/ui/forms/terms-of-service-input";
import RegisterWIthSegment from "@/frontend/components/ui/forms/register-with-segment";
import SubmitSegment from "@/frontend/components/ui/forms/submit-segment";

type FormFieldsType = Record<
  string,
  { value: string | number | boolean; errorMessage?: string }
>;

const RegisterFormBody = () => {
  const [credentials, setCredentials] = useState<FormFieldsType>({
    name: { value: "", errorMessage: "" },
    email: { value: "", errorMessage: "" },
    password: { value: "", errorMessage: "" },
    hasAcceptedTermsOfUse: { value: false, errorMessage: "" },
  });

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
              <SubmitSegment />
            </div>
          </div>
        </form>
      </div>
      <div className="col-span-2"></div>
    </main>
  );
};

export default RegisterFormBody;
