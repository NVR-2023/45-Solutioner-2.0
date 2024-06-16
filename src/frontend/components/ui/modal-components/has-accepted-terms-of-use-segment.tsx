import Link from "next/link";

const hasAcceptedTermsOfUseSegment = (
  <>
    <span>{`I accept the `}</span>
    <span className="border-b-[0.7px] border-transparent hover:border-b-black">
      <Link href="/termsofuse">Terms of Use</Link>
    </span>
  </>
);

export default hasAcceptedTermsOfUseSegment;
