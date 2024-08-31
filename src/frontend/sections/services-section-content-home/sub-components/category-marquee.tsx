import { ReactNode } from "react";
import HomepageSectionCaption from "@/frontend/components/ui/styled-text-components/homepage-section-caption";
import TextMarquee from "@/frontend/components/ui/animated-components/text-marquee";

const CategoryMarquee = () => {
  type ElementWrapperProps = {
    children: ReactNode;
  };

  const ElementWrapper = ({ children }: ElementWrapperProps) => {
    return (
      <div className=" mx-1 flex justify-center rounded border-[1px] border-[#fc6900] px-1 py-0.5 text-xs font-bold tracking-wide small-caps">
        {children}
      </div>
    );
  };

  const elementArray: string[] = [
    "wellness",
    "wardrobe",
    "security",
    "plumbing",
    "petcare",
    "patching",
    "nursing",
    "nannying",
    "hvac",
    "handyman",
    "grooming",
    "gardening",
    "extermination",
    "eventing",
    "electrical",
    "companionship",
    "cleaning",
  ];

  return (
    <div className="relative flex w-16 flex-col -space-y-1.5 overflow-clip">
      <div className="mb-4">
        <TextMarquee
          elementArray={elementArray}
          ElementWrapper={ElementWrapper}
          direction="left-to-right"
          duration={27}
        />
      </div>

      <HomepageSectionCaption>Categories</HomepageSectionCaption>
    </div>
  );
};

export default CategoryMarquee;
