import { useState, useRef, ReactNode } from "react";
import { useScroll, useMotionValueEvent, useSpring } from "framer-motion";

import RegisterButton from "../../components/ui/register-button";
import HomepageSectionTagline from "@/frontend/components/ui/styled-text-components/homepage-section-tagline";
import HomepageSectionCopy from "@/frontend/components/ui/styled-text-components/homepage-section-copy";

import AnimatedQRCode from "./sub-components/animated-qr-code";
import AnimatedPassword from "./sub-components/animated-password";

import AnimatedCharacter from "./sub-components/animated-character";

const SecuritySectionContentHome = () => {
  const ContainerRef = useRef(null);
  const [referenceScrollYProgress, setReferenceScrollYProgress] = useState<
    number | null
  >(null);

  const { scrollYProgress } = useScroll({ target: ContainerRef });
  
  useMotionValueEvent(scrollYProgress, "change", () => {
    const currentScrollYProgress: number = 1 - scrollYProgress.get();
    setReferenceScrollYProgress(currentScrollYProgress);
  });

  return (
    <div className="absolute left-[7%] top-[18%] font-aperçu text-[#fc6900]">
      <div className="flex flex-col font-extrabold">
        <HomepageSectionTagline text="Security?/Our Priority." />
      </div>

      <div className="">
        <HomepageSectionCopy text="Know your provider./ Set verbal and QR passwords./ Track everything." />
      </div>
      <div className="ms-20 flex size-12 items-center justify-center rounded border-2 border-green-400">
        <AnimatedCharacter
          referenceScrollYProgress={referenceScrollYProgress!}
          length={3}
        />
      </div>
      <div className="mt-4 flex flex-col space-y-1">
        <div ref={ContainerRef} className="flex w-full  items-center space-x-8">
          <AnimatedQRCode
            referenceScrollYProgress={referenceScrollYProgress!}
          />
          <div className="flex w-[11.7rem] justify-center">
            <AnimatedPassword
              referenceScrollYProgress={referenceScrollYProgress!}
            />
          </div>
        </div>
        <div className="pt-4">
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default SecuritySectionContentHome;
