import { useState } from "react";
import BasicModalShell from "@/frontend/components/ui/animated-components/basic-modal-shell";
import RegisterFormBody from "./sub-components/register-form-body";
import RegisterFormHeader from "./sub-components/register-form-header";

const RegisterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <BasicModalShell isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div className="flex h-full w-full flex-col items-center space-y-4 ">
        <RegisterFormHeader />
        <RegisterFormBody setIsModalOpen={setIsModalOpen} />
      </div>
    </BasicModalShell>
  );
};

export default RegisterModal;
