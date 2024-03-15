import { BasicChildrenProps } from "@/types/component-props-types";

const FormModalShell = ({ children }: BasicChildrenProps) => {
  return (
    <div
      className={`flex h-[21rem] w-[18rem] justify-center rounded bg-neutral-300  text-black shadow-[18px_18px_12px_0px_#00000040]  dark:bg-[#222222] dark:text-[#D9D9D9]`}
    >
      {children}
    </div>
  );
};

export default FormModalShell;
