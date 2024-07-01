"use client";

import { useState } from "react";

import NavbarHomepage from "@/frontend/sections/navbar-homepage/navbar-homepage";
import ServicesHomeSection from "@/frontend/sections/services-section-home/services-section-home";
import SecuritySectionHome from "@/frontend/sections/security-section-home/security-section-home";
import PricingSectionHome from "@/frontend/sections/pricing-section-home/pricing-section-home";
import useInstantScrollToTop from "@/frontend/hooks/use-instant-scroll-to-top";
import HOMEPAGE_SECTIONS from "@/utils/data/homepage-sections";
import { HomeSectionType } from "@/types/component-props-types";

export default function Home() {
  const [activeSection, setActiveSection] =
    useState<HomeSectionType>("Services");

  useInstantScrollToTop();

  return (
    <main id="homePage" className="">
      <div className="flex w-full justify-center">
        <NavbarHomepage
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
      <div className="relative border-b-2 border-neutral-300">
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
