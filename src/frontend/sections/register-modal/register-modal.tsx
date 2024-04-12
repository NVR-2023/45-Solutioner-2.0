import FormModalShell from "@/frontend/components/ui/forms/form-modal-shell";
import RegisterFormBody from "./sub-components/register-form-body";
import RegisterFormHeader from "./sub-components/register-form-header";
const RegisterModal = () => {
  return (
    <FormModalShell>
      <div className="flex h-full w-full flex-col items-center space-y-2 px-14 py-6">
        <RegisterFormHeader title={"Register"} />
        <RegisterFormBody />
      </div>
    </FormModalShell>
  );
};

export default RegisterModal;
