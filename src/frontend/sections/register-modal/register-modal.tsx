import FormModalShell from "@/frontend/components/ui/forms/form-modal-shell";
import RegisterFormHeader from "@/frontend/sections/register-modal/sub-components/register-form-header";
import RegisterFormBody from "./sub-components/register-form-body";

const RegisterModal = () => {
  return (
    <FormModalShell>
      <div className="flex h-full w-full justify-center">
        <div className="flex w-full ">
          <div className="flex-none"></div>
          <div className="flex-grow px-4">
            <RegisterFormBody />
          </div>
          <div className="flex-none"></div>
        </div>
      </div>
    </FormModalShell>
  );
};

export default RegisterModal;
