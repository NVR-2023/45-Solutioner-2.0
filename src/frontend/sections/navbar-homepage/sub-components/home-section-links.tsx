import { useState } from "react";
import Link from "next/link";
import { getSectionFomString } from "@/utils/functions/getsectionfromurl";
import homepageSections from "@/frontend/sections/navbar-homepage/sub-components/homepage-sections";


const HomeSectionLinks = () => {
  const [currentSection, setCurrentSection] = useState(homepageSections[0]);
  const handleChangeSection = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <nav className="flex items-center" role="navigation" aria-label="Homepage Sections Navigation">
      <ul className="flex items-center space-x-6 list-none">
        {homepageSections.map((link, index) => (
          <li key={index} className="relative">
            <Link
              href={getSectionFomString(link)}
              onClick={() => {
                handleChangeSection(link);
              }}>
              <span className="font-semibold text-sm">
                {link}
              </span>
            </Link>
            {link === currentSection ? (
              <div className="absolute top-full left-0 w-full mt-0.5 border-t-[1px] border-current"></div>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomeSectionLinks;
