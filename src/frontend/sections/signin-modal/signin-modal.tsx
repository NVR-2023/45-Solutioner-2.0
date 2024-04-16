import FormModalShell from "@/frontend/components/ui/forms/form-modal-shell";
import SigninFormHeader from "./sub-components/signin-form-header";
import SigninrFormBody from "./sub-components/signin-form-body";

const SigninModal = () => {
  return (
    <FormModalShell>
      <div className="flex h-full w-full flex-col items-center space-y-8">
        <SigninFormHeader />
        <SigninrFormBody />
      </div>
    </FormModalShell>
  );
};

export default SigninModal;
