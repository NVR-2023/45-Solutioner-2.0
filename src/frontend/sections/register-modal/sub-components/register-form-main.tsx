import { useState } from "react";

import GenericTextInputComponent from "../../forms/generic-text-input-component";
import EmailInput from "@/frontend/sections/forms/email-input";
import PasswordInput from "@/frontend/sections/forms/password-input";
import UserNameInput from "@/frontend/sections/forms/username-input";
import TermsOfServiceInput from "@/frontend/sections/forms/terms-of-service-input";
import RegisterWIthSegment from "@/frontend/sections/forms/register-with-segment";
import SubmitSegment from "@/frontend/sections/forms/submit-segment";

const RegisterFormMain = () => {
  type credentialProps = {
    name: { name: string; error: string };
    email: { email: string; error: string };
    password: { password: string; error: string };
    hasAcceptedTermsOfUse: { hasAcceptedTermsOfUse: boolean; error: string };
  };
  const [credentials, setCredentials] = useState<credentialProps>({
    name: { name: "", error: "" },
    email: { email: "", error: "" },
    password: { password: "", error: "" },
    hasAcceptedTermsOfUse: { hasAcceptedTermsOfUse: false, error: "" },
  });

  return (
    <main className="w-full h-full grid grid-cols-10">
      <div className="zbg-red-300 col-span-2"></div>
      <div className="col-span-6">
        <form className="pt-8">
          <div className="space-y-4">
            <div>
              <GenericTextInputComponent name={"name"} />
            </div>
            <div>
              <GenericTextInputComponent name={"email"} />
            </div>
            <div>
              <GenericTextInputComponent name={"password"} />
            </div>
          
          </div>

          <div>
            <TermsOfServiceInput />
          </div>
          <div>
            <RegisterWIthSegment />
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
