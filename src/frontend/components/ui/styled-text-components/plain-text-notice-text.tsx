import { TextComponentProps } from "@/types/component-props-types";
const PlainTextNotice = ({ text }: TextComponentProps) => {
  return (
    <span className="ont-aperçu text-[.625rem] font-semibold tracking-normal">
      {text}
    </span>
  );
};

export default PlainTextNotice;
