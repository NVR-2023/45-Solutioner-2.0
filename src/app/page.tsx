"use client";

import { useState } from "react";

import NavbarHomepage from "@/frontend/sections/navbar-homepage/navbar-homepage";
import useInstantScrollToTop from "@/frontend/hooks/use-instant-scroll-to-top";

import { HomepageSectionNameType } from "@/types/component-props-types";
import HOMEPAGE_SECTION_NAMES from "@/utils/data/homepage-section-names";
import HomepAgeSection from "@/frontend/components/ui/homepage-section";
import ServicesSectionContentHome from "@/frontend/sections/services-section-content-home/services-section-content-home";
import SecuritySectionContentHome from "@/frontend/sections/security-section-content-home/security-section-content-home";
import PricingSectionContentHome from "@/frontend/sections/pricing-section-content-home/pricing-ection-content-home";

export default function Home() {
  const [currentSection, setCurrentSection] =
    useState<HomepageSectionNameType>("Services");

  const HOMEPAGE_SECTIONS_ARRAY = [
    {
      section: HOMEPAGE_SECTION_NAMES[0],
      imageUrl:
        "https://res.cloudinary.com/dz5v9ajpb/image/upload/v1723900964/01_plumbing-03_iwsiqt.webp",

      alt: "plumbing",
      setCurrentSection: setCurrentSection,
      content: <ServicesSectionContentHome />,
    },
    {
      section: HOMEPAGE_SECTION_NAMES[1],
      imageUrl:
        "https://res.cloudinary.com/dz5v9ajpb/image/upload/v1721331126/02_gardening_aohwc2.webp",
      alt: "gardening",
      setCurrentSection: setCurrentSection,
      content: <SecuritySectionContentHome />,
    },
    {
      section: HOMEPAGE_SECTION_NAMES[2],
      imageUrl:
        "https://res.cloudinary.com/dz5v9ajpb/image/upload/v1721331126/03_dogwalking_ofcbvw.webp",
      alt: "dog walking",
      setCurrentSection: setCurrentSection,
      content: <PricingSectionContentHome/>,
    },
  ];

  useInstantScrollToTop();

  return (
    <main id="homePage" className="">
      <div className="flex w-full justify-center">
        <NavbarHomepage
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </div>
      {HOMEPAGE_SECTIONS_ARRAY.map((section, index) => (
        <HomepAgeSection
          key={index}
          section={section.section}
          imageUrl={section.imageUrl}
          alt={section.alt}
          setCurrentSection={setCurrentSection}
          content={section.content}
        />
      ))}
    </main>
  );
}
