import FormModalShell from "@/frontend/components/ui/forms/form-modal-shell";
import FormModalHeader from "@/frontend/components/ui/forms/form-modal-header";
import RegisterFormBody from "./sub-components/register-form-body";

const RegisterModal = () => {
  return (
    <FormModalShell>
      <div className="relative flex h-full flex-col]">
       {/*  <div className="h-[4.5rem] border-b-[1px] border-[D9D9D9] px-4">
          <FormModalHeader title={"register"} />
        </div> */}
        <div className="px-4">
          <RegisterFormBody />
        </div>
      </div>
    </FormModalShell>
  );
};

export default RegisterModal;
