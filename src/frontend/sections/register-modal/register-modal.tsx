import ModalShell from "@/frontend/components/ui/modal-shell/modal-shell";
import Header from "./sub-components/header";
const RegisterModal = () => {
  return (
    <ModalShell>
      <div className="flex flex-col h-full relative text-[#D9D9D9]">
        <div className="px-4 h-[4.5rem] border-[D9D9D9] border-b-[1px] grid grid-cols-10">
          <Header />
        </div>
      </div>
    </ModalShell>
  );
};

export default RegisterModal;
