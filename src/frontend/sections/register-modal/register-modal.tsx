import { useState } from "react";
import FormModalShell from "@/frontend/components/ui/form-components/form-modal-shell";
import RegisterFormBody from "./sub-components/register-form-body";
import RegisterFormHeader from "./sub-components/register-form-header";

const RegisterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <FormModalShell isModalOpen={isModalOpen}>
      <div className="flex h-full w-full flex-col items-center space-y-4 ">
        <RegisterFormHeader />
        <RegisterFormBody setIsModalOpen={setIsModalOpen} />
      </div>
    </FormModalShell>
  );
};

export default RegisterModal;
