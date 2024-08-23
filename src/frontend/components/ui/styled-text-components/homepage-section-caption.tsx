import { ReactNode } from "react";

type HomepageSectionCaptionProps = {
  children: ReactNode;
}
const HomepageSectionCaption = ({ children }: HomepageSectionCaptionProps) => {
  return (
    <div className="text-[.625rem] font-extrabold tracking-wide ">{children}</div>
  );
};

export default HomepageSectionCaption;
