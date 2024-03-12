import React, { useState } from "react";
import TextInputField from "../../../components/ui/forms/text-input-field";
import TermsOfServiceInput from "@/frontend/components/ui/forms/terms-of-service-input";
import RegisterWithSegment from "@/frontend/components/ui/forms/register-with-segment";
import SubmitSegment from "@/frontend/components/ui/forms/submit-segment";

type CredentialProps = {
  name: { value: string; errorMessage: string };
  email: { value: string; errorMessage: string };
  password: { value: string; errorMessage: string };
  hasAcceptedTermsOfUse: { value: boolean; errorMessage: string };
};

const RegisterFormBody = () => {
  const [credentials, setCredentials] = useState<CredentialProps | undefined>({
    name: { value: "", errorMessage: "" },
    email: { value: "", errorMessage: "" },
    password: { value: "", errorMessage: "" },
    hasAcceptedTermsOfUse: { value: false, errorMessage: "" },
  });

  return (
    <main className="w-full h-full grid grid-cols-10">
      <div className="col-span-2"></div>
      <div className="col-span-6">
        <form className="pt-8">
          <div className="space-y-8">
            <div>
              <TextInputField name="name" formFields={credentials} setFormFields={setCredentials} />
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
          <div>
            <TermsOfServiceInput />
          </div>
          <div>
            <RegisterWithSegment />
          </div>
          <div>
            <SubmitSegment />
          </div>
        </form>
      </div>
      <div className="col-span-2"></div>
    </main>
  );
};

export default RegisterFormBody;
