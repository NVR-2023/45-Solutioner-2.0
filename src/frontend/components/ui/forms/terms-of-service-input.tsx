import { SMALL_PROMPTS } from "@/app/global-styles.";
import UncheckedBox from "../../icons/unchecked-box";
import CheckedBox from "../../icons/checked-box";
import Link from "next/link";

const TermsOfServiceInput = () => {
  return (
    <div className={`${SMALL_PROMPTS} flex items-center space-x-1`}>
      <div>
        <CheckedBox scale={0.5} />
      </div>
      <div>
        I agree to the{" "}
        <span className="border-b border-transparent hover:border-b-black">
          <Link href="/termsofuse">Terms of Use</Link>
        </span>
      </div>
    </div>
  );
};

export default TermsOfServiceInput;
