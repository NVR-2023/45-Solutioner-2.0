import Link from "next/link";

const hasAcceptedTermsOfUseNotice = (
  <div className="h-full font-aperçu text-xs font-semibold tracking-normal">
    <span>I agree to the</span>
    <span className="border-b border-transparent hover:border-b-black">
      <Link href="/termsofuse">Terms of Use</Link>
    </span>
  </div>
);

export default hasAcceptedTermsOfUseNotice;
