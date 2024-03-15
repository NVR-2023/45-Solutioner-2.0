import { BasicChildrenProps } from "@/types/component-props-types";

const FormModalShell = ({ children }: BasicChildrenProps) => {
  return (
    <div
      className={`h-[21rem] w-[18rem] rounded bg-neutral-300  dark:bg-[#222222] text-[#D9D9D9] shadow-[18px_18px_12px_0px_#00000040]`}
    >
      {children}
    </div>
  );
};

export default FormModalShell;
