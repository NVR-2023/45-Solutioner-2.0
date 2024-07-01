import HomepageImageWrapper from "@/frontend/components/ui/homepage-image-wrapper";
import { SectionsHomepageProps } from "@/types/component-props-types";

import { motion } from "framer-motion";

const PricingSectionHome = ({ setCurrentSection }: SectionsHomepageProps) => {
  const handleOnViewportEnter = () => {
    setCurrentSection("Pricing");
  };

  return (
    <motion.section
      onViewportEnter={handleOnViewportEnter}
      id="pricing"
      className="relative bg-neutral-300"
    >
      <HomepageImageWrapper
        src="https://res.cloudinary.com/dzow47vf1/image/upload/v1714472610/A%20-%20Solutioner%202.0/dogwalking_rx2gsv.webp"
        alt="dog walking"
      />
    </motion.section>
  );
};

export default PricingSectionHome;
