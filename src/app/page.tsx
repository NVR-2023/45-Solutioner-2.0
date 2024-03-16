"use client";

import NavbarHomepage from "@/frontend/sections/navbar-homepage/navbar-homepage";
import ServicesHomeSection from "@/frontend/sections/services-section-home/services-section-home";
import SecuritySectionHome from "@/frontend/sections/security-section-home/security-section-home";
import PricingSectionHome from "@/frontend/sections/pricing-section-home/pricing-section-home";
import useInstantScrollToTop from "@/frontend/hooks/use-instant-scroll-to-top";

export default function Home() {
  useInstantScrollToTop();
  
  return (
    <main id="homePage" className="">
      <div className="flex w-full justify-center">
        <NavbarHomepage />
      </div>
      <div className="border-b-2 border-neutral-300">
        <ServicesHomeSection />
      </div>
      <div className="border-b-2 border-neutral-300">
        <SecuritySectionHome />
      </div>
      <div className="border-b-2 border-neutral-300">
        <PricingSectionHome />
      </div>
    </main>
  );
}
