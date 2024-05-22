import { useState } from "react";

import ModalShell from "@/frontend/components/ui/form-components/modal-shell";
import SigninFormHeader from "./sub-components/signin-form-header";
import SigninrFormBody from "./sub-components/signin-form-body";

const SigninModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <ModalShell isModalOpen={isModalOpen}>
      <div className="flex h-full w-full flex-col items-center space-y-8">
        <SigninFormHeader />
        <SigninrFormBody setIsModalOpen={setIsModalOpen} />
      </div>
    </ModalShell>
  );
};

export default SigninModal;
