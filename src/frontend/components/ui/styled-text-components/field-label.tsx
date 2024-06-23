import { TextComponentProps } from "@/types/component-props-types";

const FieldLabel = ({ text }: TextComponentProps) => {
  return (
    <div className="flex items-center font-aperçu text-sm font-[700] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
      {text}
    </div>
  );
};

export default FieldLabel;
