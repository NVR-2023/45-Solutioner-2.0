import EmailInput from "@/frontend/sections/forms/email-input";
import PasswordInput from "@/frontend/sections/forms/password-input";
import UserNameInput from "@/frontend/sections/forms/username-input";
import TermsOfServiceInput from "@/frontend/sections/forms/terms-of-service-input";
import RegisterWIthSegment from "@/frontend/sections/forms/register-with-segment";
import SubmitSegment from "@/frontend/sections/forms/submit-segment";

const RegisterFormMain = () => {
  return (
    <main className="w-full h-full grid grid-cols-10">
      <div className="col-span-2"></div>
      <div className="col-span-6">
        <form className="">
          <div>
            <UserNameInput />
          </div>
          <div>
            <EmailInput />
          </div>
          <div>
            <PasswordInput />
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
      <div className="col-span-2"></div>
    </main>
  );
};

export default RegisterFormMain;
