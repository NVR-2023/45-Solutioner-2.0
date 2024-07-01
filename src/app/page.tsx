"use client";

import { useState } from "react";

import NavbarHomepage from "@/frontend/sections/navbar-homepage/navbar-homepage";
import ServicesHomeSection from "@/frontend/sections/services-section-home/services-section-home";
import SecuritySectionHome from "@/frontend/sections/security-section-home/security-section-home";
import PricingSectionHome from "@/frontend/sections/pricing-section-home/pricing-section-home";
import useInstantScrollToTop from "@/frontend/hooks/use-instant-scroll-to-top";
import { HomeSectionType } from "@/types/component-props-types";

export default function Home() {
  const [currentSection, setCurrentSection] =
    useState<HomeSectionType>("Services");
  useInstantScrollToTop();

  return (
    <main id="homePage" className="">
      <div className="flex w-full justify-center">
        <NavbarHomepage
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </div>
      <div className="relative border-b-2 border-neutral-300">
        <ServicesHomeSection setCurrentSection={setCurrentSection} />
      </div>
      <div className="border-b-2 border-neutral-300">
        <SecuritySectionHome setCurrentSection={setCurrentSection} />
      </div>
      <div className="border-b-2 border-neutral-300">
        <PricingSectionHome setCurrentSection={setCurrentSection} />
      </div>
    </main>
  );
}
