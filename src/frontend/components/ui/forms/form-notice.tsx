import { ReactNode } from "react";

type FormNoticeProps = {
  notice: ReactNode;
};
const FormNotice = ({ notice }: FormNoticeProps) => {
  return (
    <span className="font-aperçu text-[.625rem] font-semibold tracking-normal">
      {notice}
    </span>
  );
};

export default FormNotice;
