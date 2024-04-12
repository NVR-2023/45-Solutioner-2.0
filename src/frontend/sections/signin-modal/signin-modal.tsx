import FormModalShell from "@/frontend/components/ui/forms/form-modal-shell";
import SigninFormHeader from "./sub-components/signin-form-header";
import SigninrFormBody from "./sub-components/signin-form-body";

const SigninModal = () => {
  return (
    <FormModalShell>
      <div className="flex h-full w-full flex-col items-center space-y-3 px-14 py-6">
        <SigninFormHeader />
        <SigninrFormBody />
      </div>
    </FormModalShell>
  );
};

export default SigninModal;
