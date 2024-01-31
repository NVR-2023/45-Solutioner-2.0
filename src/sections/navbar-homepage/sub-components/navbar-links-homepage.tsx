import React, { FC } from "react";
import Link from "next/link";
import { getSectionFomString } from "@/utils/functions/getsectionfromurl";
import homepageSections from "@/sections/navbar-homepage/sub-components/homepageSections";
import { HOME_NAVBAR_LINKS_TEXT } from "@/app/global-text-styles";

const HomeSectionLinks: FC = () => {
  return (
    <nav role="navigation" aria-label="Homepage Sections Navigation">
      <ul className="flex items-center space-x-7 list-none">
        {homepageSections.map((link, index) => (
          <li className="list-none" key={index}>
            <Link href={getSectionFomString(link)} className="flex items-center">
              <span className={HOME_NAVBAR_LINKS_TEXT}>{link}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomeSectionLinks;
