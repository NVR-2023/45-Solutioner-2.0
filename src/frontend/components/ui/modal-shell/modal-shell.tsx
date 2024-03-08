import { BasicChildrenProps } from "@/types/component-props-types";

const ModalShell = ({ children }: BasicChildrenProps) => {
  return (
    <div
      className={`bg-[#222222] rounded text-[#D9D9D9] w-[18rem] h-[21rem] border-[1px] border-[#D9D9D9] shadow-[18px_18px_12px_0px_#00000040]`}>
      {children}
    </div>
  );
};

export default ModalShell;

