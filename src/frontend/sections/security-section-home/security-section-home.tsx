import { useEffect } from "react";
import HomepageImageWrapper from "@/frontend/components/ui/homepage-image-wrapper";
import { SectionsHomepageProps } from "@/types/component-props-types";
import { useInView } from "react-intersection-observer";


const SecuritySectionHome = ({ setCurrentSection }: SectionsHomepageProps) => {
  
    const { ref, inView } = useInView();

    useEffect(() => {
      if (inView) {
        setCurrentSection("Security");
      }
    }, [inView]);
  
  return (
    <section ref={ref} id="security" className="relative bg-neutral-300">
      <HomepageImageWrapper
        src="https://res.cloudinary.com/dzow47vf1/image/upload/v1714472611/A%20-%20Solutioner%202.0/gardening_hiuqqn.webp"
        alt="gardening"
      />
    </section>
  );
};

export default SecuritySectionHome;
