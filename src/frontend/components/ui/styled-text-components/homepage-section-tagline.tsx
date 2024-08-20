import { ReactNode } from "react";

type HomepageSectionTaglineProps = {
  children?: ReactNode;
};
const HomepageSectionTagline = ({ children }: HomepageSectionTaglineProps) => {
  return (
    <div className="text-2xl font-extrabold -tracking-[3%]">{children}</div>
  );
};

export default HomepageSectionTagline;
