import { TextComponentProps } from "@/types/component-props-types";

const HomepageSectionTagline = ({ text }: TextComponentProps ) => {
  return <div className="text-[] text-2xl -tracking-[3%]">{text}</div>;
};

export default HomepageSectionTagline;
