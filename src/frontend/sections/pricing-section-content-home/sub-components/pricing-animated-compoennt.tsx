import AnimatedSVGSequence from "./animated-svg-sequence";
import TextInplaceInfiniteLoop from "@/frontend/components/ui/animated-components/text-inplace-infinite-loop";
import HomepageSectionCaption from "@/frontend/components/ui/styled-text-components/homepage-section-caption";

const PricingAnimatedComponent = () => {
  return (
    <div className="-mt-10 mb-2 flex size-20 flex-col text-[#fc6900]">
      <AnimatedSVGSequence />
      <div className="flex justify-center">
        <TextInplaceInfiniteLoop
          WrapperElement={HomepageSectionCaption}
          textArray={["Affordable", "Discounted", "On Sale"]}
          duration={2.63}
        />
      </div>
    </div>
  );
};

export default PricingAnimatedComponent;
