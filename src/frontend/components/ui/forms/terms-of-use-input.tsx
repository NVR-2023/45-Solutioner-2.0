import { Dispatch, SetStateAction } from "react";
import UncheckedBox from "../../icons/unchecked-box";
import CheckedBox from "../../icons/checked-box";
import ToggleSwitch from "../toggle-switch/toggle-switch";
import Link from "next/link";

type TermsOfUseType = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

const TermsOfUseInput = ({ state, setState }: TermsOfUseType) => {
 
  
  
  return (
    <div className="flex items-center space-x-1">
      <div>
        <ToggleSwitch
          scale={0.75}
          firstIcon={UncheckedBox}
          secondIcon={CheckedBox}
          state={state}
          setState={setState}
        />
      </div>
      <div className="font-aperçu text-sm font-semibold tracking-normal md:text-[.625rem]">
        I agree to the{" "}
        <span className="border-b border-transparent hover:border-b-black">
          <Link href="/termsofuse">Terms of Use</Link>
        </span>
      </div>
    </div>
  );
};

export default TermsOfUseInput;
