import { TextComponentProps } from "@/types/component-props-types";

const HomepageSectionCaption = ({ text }: TextComponentProps) => {
  return (
    <div className="text-[.625rem] font-extrabold tracking-wide ">{text}</div>
  );
};

export default HomepageSectionCaption;
