import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import RegisterButton from "../../components/ui/register-button";
import HomepageSectionTagline from "@/frontend/components/ui/styled-text-components/homepage-section-tagline";
import HomepageSectionCopy from "@/frontend/components/ui/styled-text-components/homepage-section-copy";

import AnimatedQRCode from "./sub-components/animated-qr-code";
import AnimatedProfile from "./sub-components/animated-profile";
const SecuritySectionContentHome = () => {
  const ContainerRef = useRef(null);
  const [referenceScrollYProgress, setReferenceScrollYProgress] = useState<
    number | null
  >(null);

  const { scrollYProgress } = useScroll({ target: ContainerRef });
  useMotionValueEvent(scrollYProgress, "change", () => {
    const currentScrollYProgress: number = 1-scrollYProgress.get();
     setReferenceScrollYProgress(currentScrollYProgress);
  });

  return (
    <div className="absolute left-[7%] top-[20%] font-aperçu text-[#fc6900]">
      <div className="flex flex-col -space-y-1 font-extrabold">
        <HomepageSectionTagline text="Security?" />
        <HomepageSectionTagline text="Our priority." />
      </div>

      <div className="hidden w-48 pt-2 bg-blend-multiply md:flex">
        <HomepageSectionCopy text="Know your provider beforehand. Set verbal and QR passwords." />
      </div>

      <div className="flex flex-col space-y-1 pt-9">
        <div ref={ContainerRef} className="flex items-end space-x-4">
          <AnimatedProfile />
          <AnimatedQRCode />
          {referenceScrollYProgress}
        </div>
        <div className="pt-4">
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default SecuritySectionContentHome;
