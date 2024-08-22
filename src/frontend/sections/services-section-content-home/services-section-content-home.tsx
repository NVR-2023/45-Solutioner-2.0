import RegisterButton from "../../components/ui/register-button";
import StaggeredWordSentence from "@/frontend/components/ui/animated-components/staggered-word-sentence";
import HomepageSectionTagline from "@/frontend/components/ui/styled-text-components/homepage-section-tagline";
import HomepageSectionCopy from "@/frontend/components/ui/styled-text-components/homepage-section-copy";
import StaggeredSentenceParagraph from "@/frontend/components/ui/animated-components/staggered-senetnce-paragraph";
import ServicesCounter from "./sub-components/services-counter";
import CategoryMarquee from "./sub-components/category-marquee";

const ServicesSectionContentHome = () => {
  return (
    <article>
      <div className="absolute left-[7%] top-[17.5%] font-aperçu text-[#fc6900]">
        <div className="flex flex-col -space-y-1">
          <StaggeredWordSentence
            WrapperElement={HomepageSectionTagline}
            text="Home services?"
          />
          <StaggeredWordSentence
            WrapperElement={HomepageSectionTagline}
            text="We got you."
            baseDelay={0.3}
          />
        </div>

        <div className="hidden w-48 pt-2 bg-blend-multiply md:flex">
          <StaggeredSentenceParagraph
            text="From stubborn sink pipes to/ pesky hornets' nests,/ solutions are a
          click away."
            baseDelay={0.7}
            WrapperElement={HomepageSectionCopy}
          />
        </div>

        <div className="flex flex-col space-y-1 pt-9">
          <div className="mt-2 flex items-end space-x-4">
            <CategoryMarquee />
            <ServicesCounter />
          </div>
          <div className="pt-4">
            <RegisterButton />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServicesSectionContentHome;
