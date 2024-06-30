import { useState } from "react";
import HomepageImageContainer from "@/frontend/components/ui/homepage-image-container";
import { ImageLoadingStatuses } from "@/utils/data/imageLoadingStatuses";



const ServicesHomeSection = () => {
  const [imageLoadingStatus, setImageLoadingStatus] =
    useState<ImageLoadingStatuses>(ImageLoadingStatuses.PENDING);

  return (
    <section id="services" className="relative bg-neutral-300">
      <HomepageImageContainer
        src="https://res.cloudinary.com/dzow47vf1/image/upload/v1714472610/A%20-%20Solutioner%202.0/plumbing_pxvrbd.webp"
        alt="plumbing"
        imageLoadingStatus={imageLoadingStatus}
        setImageLoadingStatus={setImageLoadingStatus}
      />

      {imageLoadingStatus === ImageLoadingStatuses.LOADED && (
        <div className="absolute left-[5%] top-[15%] flex w-1/3">
          <div className="w-1/2 bg-purple-400">2</div>
        </div>
      )}
    </section>
  );
};

export default ServicesHomeSection;
