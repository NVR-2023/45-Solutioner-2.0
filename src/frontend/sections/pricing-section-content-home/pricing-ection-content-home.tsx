import RegisterButton from "../../components/ui/register-button";
import HomepageSectionTagline from "@/frontend/components/ui/styled-text-components/homepage-section-tagline";
import HomepageSectionCopy from "@/frontend/components/ui/styled-text-components/homepage-section-copy";
import StaggeredWordSentence from "@/frontend/components/ui/animated-components/staggered-word-sentence";
import StaggeredSentenceParagraph from "@/frontend/components/ui/animated-components/staggered-senetnce-paragraph";
import TextInplaceInfiniteLoop from "@/frontend/components/ui/animated-components/text-inplace-infinite-loop";

import { ReactNode } from "react";
type WrappeElementProps = {
  children: ReactNode;
};
const WrapperElement = ({ children }: WrappeElementProps) => (
  <div className="size-40 text-base font-extrabold">{children}</div>
);

const PricingSectionContentHome = () => {
  return (
    <article>
      <div className="absolute left-[7%] top-[17.5%] font-aperçu text-[#fc6900]">
        <div className="flex flex-col -space-y-1">
          <StaggeredWordSentence
            WrapperElement={HomepageSectionTagline}
            text="Sales, bargains, discounts."
          />
          <StaggeredWordSentence
            WrapperElement={HomepageSectionTagline}
            text="You have it all."
            baseDelay={0.3}
          />
        </div>

        <div className="hidden w-48 pt-2 bg-blend-multiply md:flex">
          <StaggeredSentenceParagraph
            baseDelay={0.7}
            text="Affordable services/ and sales/hasgdshad"
            WrapperElement={HomepageSectionCopy}
          />
        </div>

        <div className="flex flex-col space-y-1 pt-9">
          <div className="ms-20 flex w-40 items-center justify-center">
            <TextInplaceInfiniteLoop
              WrapperElement={WrapperElement}
              textArray={["Regular price", "Discounted", "On Sale"]}
              duration={5}
            />
          </div>
          <div className="pt-4">
            <RegisterButton />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PricingSectionContentHome;
