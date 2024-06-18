import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getSectionFomString } from "@/utils/functions/get-section-from-url";
import HOMEPAGE_SECTIONS from "@/utils/data/homepage-sections";
import NavbarTab from "@/frontend/components/ui/styled-text-components/navbar-tab";

const HomeSectionLinks = () => {
  const [currentSection, setCurrentSection] = useState(HOMEPAGE_SECTIONS[0]);
  const handleChangeSection = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <nav
      className="flex items-center"
      role="navigation"
      aria-label="Homepage Sections Navigation"
    >
      <menu className="flex list-none items-center space-x-4">
        {HOMEPAGE_SECTIONS.map((link, index) => (
          <li key={index} className="relative">
            <Link
              href={getSectionFomString(link)}
              role="link"
              aria-label="section link"
              onClick={() => {
                handleChangeSection(link);
              }}
            >
              <NavbarTab text={link} />
            </Link>
            {link === currentSection && (
              <motion.div
                layoutId="activeSectionUnderline"
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-full mt-0.5 w-full border-t-[1px] border-current"
              ></motion.div>
            )}
          </li>
        ))}
      </menu>
    </nav>
  );
};

export default HomeSectionLinks;
