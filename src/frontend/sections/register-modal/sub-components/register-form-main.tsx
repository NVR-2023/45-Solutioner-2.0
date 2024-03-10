import EmailInput from "@/frontend/components/ui/forms/email-input";
import PasswordInput from "@/frontend/components/ui/forms/password-input";
import UserNameInput from "@/frontend/components/ui/forms/username-input";
import TermsOfServiceInput from "@/frontend/components/ui/forms/terms-of-service-input";

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
        </form>
      </div>
      <div className="col-span-2"></div>
    </main>
  );
};

export default RegisterFormMain;
