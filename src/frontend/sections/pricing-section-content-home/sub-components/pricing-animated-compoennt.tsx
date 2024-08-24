import AnimatedSVGSequence from "./animated-svg-sequence";
import TextInplaceInfiniteLoop from "@/frontend/components/ui/animated-components/text-inplace-infinite-loop";
import HomepageSectionCaption from "@/frontend/components/ui/styled-text-components/homepage-section-caption";
import AnimatedDiscountLoop from "./animated-discount-loop";
const PricingAnimatedComponent = () => {
  return (
    <div className="-mt-8 mb-2 flex w-48 justify-between text-[#fc6900]">
      <div className="flex size-20 flex-col">
        <AnimatedSVGSequence />
        <div className="flex justify-center">
          <TextInplaceInfiniteLoop
            WrapperElement={HomepageSectionCaption}
            textArray={["Affordable", "Discounted", "On Sale"]}
            duration={3.141}
          />
        </div>
      </div>
      <div className="mt-1,5">
        <AnimatedDiscountLoop />
      </div>
    </div>
  );
};

export default PricingAnimatedComponent;
