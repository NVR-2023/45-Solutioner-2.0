import { ReactNode } from "react";

type FormNoticeProps = {
  notice: ReactNode;
};
const NoticeWithChildren = ({ notice }: FormNoticeProps) => {
  return (
    <span className="font-aperçu text-[.625rem] font-semibold tracking-normal">
      {notice}
    </span>
  );
};

export default NoticeWithChildren;
