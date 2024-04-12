import { BasicChildrenProps } from "@/types/component-props-types";

const FormModalShell = ({ children }: BasicChildrenProps) => {
  return (
    <div className=" flex h-[25rem] w-[18rem] items-center justify-center rounded bg-neutral-300 text-black shadow-[18px_18px_12px_0px_#00000040] dark:text-neutral-300  ">
      {children}
    </div>
  );
};

export default FormModalShell;
