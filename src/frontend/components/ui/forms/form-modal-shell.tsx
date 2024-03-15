import { UI_BACKGROUND , TEXT_COLOR } from "@/app/global-styles.";
import { BasicChildrenProps } from "@/types/component-props-types";

const FormModalShell = ({ children }: BasicChildrenProps) => {
  return (
    <div
      className={` flex h-[21rem] w-[18rem] justify-center rounded shadow-[18px_18px_12px_0px_#00000040] ${UI_BACKGROUND} ${TEXT_COLOR} rounded`}
    >
      {children}
    </div>
  );
};

export default FormModalShell;
