import React, { FC } from "react";
import homepageSections from "@/sections/navbar-homepage/sub-components/homepage-sections";
import Link from "next/link";
import { getSectionFomString } from "@/utils/functions/getsectionfromurl";

import {
  HOME_NAVBAR_LINKS_TEXT_LIGHT,
  LIGHT_THEME_DEFAULT,
  DARK_THEME_DEFAULT,
} from "@/app/global-text-styles";

type MobileSidemenuPropsType = {
  action: () => void;
};

const MobileSidemenuHomepage: FC<MobileSidemenuPropsType> = ({ action }) => {
  return (
      <nav className={`z-[999] top-3 right-3 ${LIGHT_THEME_DEFAULT} ${DARK_THEME_DEFAULT}`}>
        <div className="flex justify-start">
          <ul className="list-none flex flex-col space-y-1 mt-3 mx-3">
            {homepageSections &&
              homepageSections.map((section, index) => (
                <li key={index} onClick={action}>
                  <Link
                    className={`${HOME_NAVBAR_LINKS_TEXT_LIGHT} pb-[2px] border-b-[1px] border-solid border-transparent transition-all duration-300 hover:border-current`}
                    href={getSectionFomString(section)}>
                    {section}
                  </Link>
                </li>
              ))}
            <br />
          </ul>
        </div>
      </nav>
  );
};

export default MobileSidemenuHomepage;
