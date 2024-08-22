import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import RegisterButton from "../../components/ui/register-button";
import HomepageSectionTagline from "@/frontend/components/ui/styled-text-components/homepage-section-tagline";
import HomepageSectionCopy from "@/frontend/components/ui/styled-text-components/homepage-section-copy";
import StaggeredWordSentence from "@/frontend/components/ui/animated-components/staggered-word-sentence";
import StaggeredSentenceParagraph from "@/frontend/components/ui/animated-components/staggered-senetnce-paragraph";

import AnimatedScrabbleWord from "./sub-components/animated-scrabble-woird";
import debounceFunction from "@/utils/functions/debounce-function/debounce-function";
import PasswordCheck from "./sub-components/password-check";

const SecuritySectionContentHome = () => {
  const ContainerRef = useRef<HTMLDivElement | null>(null);
  const [referenceScrollYProgress, setReferenceScrollYProgress] = useState<
    number | null
  >(null);

  const DEBOUNCE_TIMEOUT = 75;
  const { scrollYProgress } = useScroll({ target: ContainerRef });
  const debouncedScrollYProgressUpdate = debounceFunction((value: number) => {
    setReferenceScrollYProgress(value);
  }, DEBOUNCE_TIMEOUT);

  useMotionValueEvent(scrollYProgress, "change", () => {
    const currentScrollYProgress: number = 1 - scrollYProgress.get();
    debouncedScrollYProgressUpdate(currentScrollYProgress);
  });

  return (
    <div className="absolute left-[7%] top-[18%] font-aperçu text-[#fc6900]">
      <div className="flex flex-col -space-y-1">
        <StaggeredWordSentence
          WrapperElement={HomepageSectionTagline}
          text="Your security?"
        />

        <StaggeredWordSentence
          WrapperElement={HomepageSectionTagline}
          text="Our priority."
          baseDelay={0.3}
        />
      </div>

      <div className="">
        <StaggeredSentenceParagraph
          text="Know your provider,/set verbal and QR passwords,/ and track everything."
          WrapperElement={HomepageSectionCopy}
          baseDelay={0.7}
        />
      </div>

      <div className="mt-4 flex flex-col space-y-1">
        <div ref={ContainerRef} className="flex w-full items-center space-x-8">
          <div className="flex items-center justify-center space-x-4 pt-4">
            <AnimatedScrabbleWord
              word={"PASSWORD"}
              referenceScrollYProgress={referenceScrollYProgress!}
            />
            <PasswordCheck
              referenceScrollYProgress={referenceScrollYProgress!}
            />
          </div>
        </div>
        <div className="pt-8">
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default SecuritySectionContentHome;
