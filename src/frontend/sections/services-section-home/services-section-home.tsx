import { Suspense } from "react";
import HomepageImageFallback from "@/frontend/components/ui/homepage-image-fallback/homepage-image-fallback";

import Image from "next/image";

const ServicesHomeSection = () => {
  return (
    <section id="services">
      <Suspense fallback={<HomepageImageFallback />}>
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/dzow47vf1/image/upload/v1714472610/A%20-%20Solutioner%202.0/plumbing_pxvrbd.webp"
            alt="plumbing"
            width={1920}
            height={1080}
            priority={true}
          />
        </div>
      </Suspense>
    </section>
  );
};

export default ServicesHomeSection;
