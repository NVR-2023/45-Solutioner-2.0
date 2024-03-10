import FormModalShell from "@/frontend/components/ui/forms/form-modal-shell";
import FormModalHeader from "@/frontend/components/ui/forms/form-modal-header";
import RegisterFormMain from "./sub-components/register-form-main";

const RegisterModal = () => {
  return (
    <FormModalShell>
      <div className="flex flex-col h-full relative text-[#D9D9D9]">
        <div className="px-4 h-[4.5rem] border-[D9D9D9] border-b-[1px]">
          <FormModalHeader title={"register"} />
        </div>
        <div className="px-4">
          <RegisterFormMain />
        </div>
      </div>
    </FormModalShell>
  );
};

export default RegisterModal;
