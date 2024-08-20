import { ReactNode } from "react";

type VerifiedProviderCaptionProps = {
  children?: ReactNode;
};
const VerifiedProviderCaption = ({
  children,
}: VerifiedProviderCaptionProps) => {
  return (
    <span className="px-[0.3px] text-sm font-black italic small-caps ">
      {children}
    </span>
  );
};

export default VerifiedProviderCaption;
