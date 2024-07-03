import { useState } from "react";

import BasicModalShell from "@/frontend/components/ui/animated-components/basic-modal-shell";
import SigninFormHeader from "./sub-components/signin-form-header";
import SigninrFormBody from "./sub-components/signin-form-body";

const SigninModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <BasicModalShell isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div className="flex h-full w-full flex-col items-center space-y-8">
        <SigninFormHeader />
        <SigninrFormBody setIsModalOpen={setIsModalOpen} />
      </div>
    </BasicModalShell>
  );
};

export default SigninModal;
