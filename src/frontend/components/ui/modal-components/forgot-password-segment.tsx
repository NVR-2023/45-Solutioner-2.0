import PlainTextNotice from "../styled-text-components/plain-text-notice-text";
import Link from "next/link";

const ForgotPasswordSegment = () => {
  return (
    <Link href="/" className="border-b-[0.7px] border-transparent hover:border-b-black">
      <PlainTextNotice text={"Forgot your password?"} />
    </Link>
  );
};

export default ForgotPasswordSegment;
