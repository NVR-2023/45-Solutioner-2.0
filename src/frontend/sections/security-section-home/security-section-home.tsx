import { Suspense } from "react";
import HomepageImageFallback from "@/frontend/components/ui/homepage-image-fallback/homepage-image-fallback";
import Image from "next/image";

const SecuritySectionHome = () => {
  return (
    <section id="security">
      <Suspense fallback={<HomepageImageFallback />}>
        <div>
          <Image
            src="https://res.cloudinary.com/dzow47vf1/image/upload/v1714472611/A%20-%20Solutioner%202.0/gardening_hiuqqn.webp"
            alt="gardening"
            width={1920}
            height={1080}
          />
        </div>
      </Suspense>
    </section>
  );
};

export default SecuritySectionHome;
