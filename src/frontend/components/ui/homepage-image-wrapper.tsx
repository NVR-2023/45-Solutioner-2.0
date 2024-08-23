import { useState, useEffect, ReactNode } from "react";
import HomepageImageContainer from "@/frontend/components/ui/homepage-image-container";
import { ImageLoadingStatuses } from "@/utils/data/imageLoadingStatuses";
import { useInView } from "react-intersection-observer";

import { HomepageSectionNameType } from "@/types/component-props-types";

import { lowercaseFirstLetter } from "@/utils/functions/lowercase-first-letter";

type HomepageSectionProps = {
  section: HomepageSectionNameType;
  imageUrl: string;
  alt: string;
  content?: ReactNode;
  setCurrentSection: (section: HomepageSectionNameType) => void;
};

const HomepageImageWrapper = ({
  section,
  imageUrl,
  alt,
  content,
  setCurrentSection,
}: HomepageSectionProps) => {
  const [imageLoadingStatus, setImageLoadingStatus] =
    useState<ImageLoadingStatuses>(ImageLoadingStatuses.PENDING);

  const { ref, inView } = useInView({ threshold: 0.3 });
  const handleOnSectionIsInView = () => {
    setCurrentSection(section);
  };

  useEffect(() => {
    if (inView) {
      handleOnSectionIsInView();
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative border-b-2 border-neutral-300">
      <section id={lowercaseFirstLetter(section)} className="bg-neutral-300">
        <HomepageImageContainer
          src={imageUrl}
          alt={alt}
          imageLoadingStatus={imageLoadingStatus}
          setImageLoadingStatus={setImageLoadingStatus}
        />

        {imageLoadingStatus === ImageLoadingStatuses.LOADED && (
          <div className="absolute inset-0 w-full">{content}</div>
        )}
      </section>
    </div>
  );
};

export default HomepageImageWrapper;
