"use client";

import { useState } from "react";

import NavbarHomepage from "@/frontend/sections/navbar-homepage/navbar-homepage";
import useInstantScrollToTop from "@/frontend/hooks/use-instant-scroll-to-top";

import { HomepageSectionNameType } from "@/types/component-props-types";
import HOMEPAGE_SECTION_NAMES from "@/utils/data/homepage-section-names";
import HomepAgeSection from "@/frontend/components/ui/homepage-section";
import ServicesSectionContentHome from "@/frontend/sections/services-section-content-home/services-section-content-home";

export default function Home() {
  const [currentSection, setCurrentSection] =
    useState<HomepageSectionNameType>("Services");

  const HOMEPAGE_SECTIONS_ARRAY = [
    {
      section: HOMEPAGE_SECTION_NAMES[0],
      imageUrl:
        "https://res.cloudinary.com/dzow47vf1/image/upload/v1714472610/A%20-%20Solutioner%202.0/plumbing_pxvrbd.webp",
      alt: "plumbing",
      setCurrentSection: setCurrentSection,
      content: <ServicesSectionContentHome />,
    },
    {
      section: HOMEPAGE_SECTION_NAMES[1],
      imageUrl:
        "https://res.cloudinary.com/dzow47vf1/image/upload/v1714472611/A%20-%20Solutioner%202.0/gardening_hiuqqn.webp",
      alt: "gardening",
      setCurrentSection: setCurrentSection,
      content: <ServicesSectionContentHome />,
    },
    {
      section: HOMEPAGE_SECTION_NAMES[2],
      imageUrl:
        "https://res.cloudinary.com/dzow47vf1/image/upload/v1714472610/A%20-%20Solutioner%202.0/dogwalking_rx2gsv.webp",
      alt: "dog walking",
      setCurrentSection: setCurrentSection,
      content: <ServicesSectionContentHome />,
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
