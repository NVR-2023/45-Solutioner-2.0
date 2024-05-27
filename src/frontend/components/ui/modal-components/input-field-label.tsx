import { ReactNode } from "react";
type InputLabelProps = {
  label: ReactNode;
};

const InputFieldLabel = ({ label }: InputLabelProps) => {
  return (
    <div className="font-aperçu flex items-center text-sm font-[700] leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
      {label}
    </div>
  );
};

export default InputFieldLabel;