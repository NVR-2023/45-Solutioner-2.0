import { TextComponentProps } from "@/types/component-props-types";
const HomepageSectionCopy = ({ text }: TextComponentProps) => {
  return <div className="leading-~6 text-sm font-bold">{text}</div>;
};

export default HomepageSectionCopy;
