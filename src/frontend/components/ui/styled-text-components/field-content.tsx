import { TextComponentProps } from "@/types/component-props-types";

const FieldContent = ({ text }: TextComponentProps) => {
  return (
    <span className="font-aperçu text-sm font-bold text-black dark:text-neutral-300 md:text-xs">
      {text}
    </span>
  );
};

export default FieldContent;