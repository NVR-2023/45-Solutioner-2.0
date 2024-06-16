import { TextComponentProps } from "@/types/component-props-types";

const FieldLabel = ({ text }: TextComponentProps) => {
  return (
    <label className="flex items-center font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
      {text}
    </label>
  );
};

export default FieldLabel;
