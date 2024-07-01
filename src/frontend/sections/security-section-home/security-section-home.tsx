/* import { useEffect } from "react";
 */ import HomepageImageWrapper from "@/frontend/components/ui/homepage-image-wrapper";
import { SectionsHomepageProps } from "@/types/component-props-types";
/* import { useInView } from "react-intersection-observer";
 */

import { motion } from "framer-motion";

const SecuritySectionHome = ({ setCurrentSection }: SectionsHomepageProps) => {
  const handleOnViewportEnter = () => {
    setCurrentSection("Security");
  };

  /*    const { ref, inView } = useInView();

    useEffect(() => {
      if (inView) {
        setCurrentSection("Security");
      }
    }, [inView]); */

  return (
    <motion.section
      onViewportEnter={handleOnViewportEnter}
      id="security"
      className="relative bg-neutral-300"
    >
      <HomepageImageWrapper
        src="https://res.cloudinary.com/dzow47vf1/image/upload/v1714472611/A%20-%20Solutioner%202.0/gardening_hiuqqn.webp"
        alt="gardening"
      />
    </motion.section>
  );
};

export default SecuritySectionHome;
