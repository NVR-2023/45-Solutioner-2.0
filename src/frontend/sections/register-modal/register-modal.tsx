import { useState } from "react";
import ModalShell from "@/frontend/components/ui/form-components/modal-shell";
import RegisterFormBody from "./sub-components/register-form-body";
import RegisterFormHeader from "./sub-components/register-form-header";

const RegisterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <ModalShell isModalOpen={isModalOpen}>
      <div className="flex h-full w-full flex-col items-center space-y-4 ">
        <RegisterFormHeader />
        <RegisterFormBody setIsModalOpen={setIsModalOpen} />
      </div>
    </ModalShell>
  );
};

export default RegisterModal;
