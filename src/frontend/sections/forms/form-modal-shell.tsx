import { BasicChildrenProps } from "@/types/component-props-types";

const FormModalShell = ({ children }: BasicChildrenProps) => {
  return (
    <div
      className={`bg-[#222222] rounded text-[#D9D9D9] w-[21rem] h-[25rem] border-[1px] border-[#D9D9D9] shadow-[18px_18px_12px_0px_#00000040]`}>
      {children}
    </div>
  );
};

export default FormModalShell;
