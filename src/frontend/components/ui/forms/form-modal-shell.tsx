import { BasicChildrenProps } from "@/types/component-props-types";

const FormModalShell = ({ children }: BasicChildrenProps) => {
  return (
    <div className=" bg-neutral-300 flex h-[23rem] w-[18rem] justify-center rounded text-black shadow-[18px_18px_12px_0px_#00000040] dark:text-neutral-300  ">
      {children}
    </div>
  );
};

export default FormModalShell;
