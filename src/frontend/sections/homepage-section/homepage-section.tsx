import { ReactNode, ComponentType } from "react";
import RegisterButton from "@/frontend/components/ui/register-button";
import StaggeredWordSentence from "@/frontend/components/ui/animated-components/staggered-word-sentence";
import HomepageSectionTagline from "@/frontend/components/ui/styled-text-components/homepage-section-tagline";
import StaggeredSentenceParagraph from "@/frontend/components/ui/animated-components/staggered-senetnce-paragraph";
import HomepageSectionCopy from "@/frontend/components/ui/styled-text-components/homepage-section-copy";

type HomepageSectionProps<T = {}> = {
  tagline1: string;
  tagline2: string;
  copy: string;
  AnimatedComponent: ComponentType<{ children?: ReactNode } & T>;
};

const HomepageSection = ({
  tagline1,
  tagline2,
  copy,
  AnimatedComponent,
}: HomepageSectionProps) => {
  return (
    <article>
      <div className="absolute left-[7%] top-[17.5%] font-aperçu text-[#fc6900]">
        <div className="flex flex-col -space-y-1">
          <StaggeredWordSentence
            WrapperElement={HomepageSectionTagline}
            text={tagline1}
          />
          <StaggeredWordSentence
            WrapperElement={HomepageSectionTagline}
            text={tagline2}
            baseDelay={0.3}
          />
        </div>

        <div className="hidden w-48 pt-2 bg-blend-multiply md:flex">
          <StaggeredSentenceParagraph
            text={copy}
            baseDelay={0.7}
            WrapperElement={HomepageSectionCopy}
          />
        </div>

        <div className="flex flex-col space-y-1 pt-9">
          <div className="mt-2 flex items-end space-x-4">
            <AnimatedComponent />
          </div>
          <div className="pt-4">
            <RegisterButton />
          </div>
        </div>
      </div>
    </article>
  );
};

export default HomepageSection;
