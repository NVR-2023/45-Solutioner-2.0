import { ReactNode } from "react";

type HomepageSectionCopyProps = {
  children?: ReactNode;
};
const HomepageSectionCopy = ({ children }: HomepageSectionCopyProps) => {
  return <div className="text-sm font-bold leading-6">{children}</div>;
};

export default HomepageSectionCopy;
