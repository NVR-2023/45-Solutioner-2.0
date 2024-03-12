import React, { useState, Dispatch, SetStateAction } from "react";
import TextInputField from "../../../components/ui/forms/text-input-field";
import TermsOfServiceInput from "@/frontend/components/ui/forms/terms-of-service-input";
import RegisterWithSegment from "@/frontend/components/ui/forms/register-with-segment";
import SubmitSegment from "@/frontend/components/ui/forms/submit-segment";

type CredentialProps = {
  name: { value: string; error: string };
  email: { value: string; error: string };
  password: { value: string; error: string };
  hasAcceptedTermsOfUse: { value: boolean; error: string };
};

const RegisterFormMain = () => {
  const [credentials, setCredentials] = useState<CredentialProps | undefined>({
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    hasAcceptedTermsOfUse: { value: false, error: "" },
  });

  
  return (
    <main className="w-full h-full grid grid-cols-10">
      <div className="zbg-red-300 col-span-2"></div>
      <div className="col-span-6">
        <form className="pt-8">
          <div className="space-y-5">
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
      <div className="zbg-blue-300 col-span-2"></div>
    </main>
  );
};

export default RegisterFormMain;
