import React, { FC } from "react";
import homepageSections from "@/sections/navbar-homepage/sub-components/homepageSections";
import Link from "next/link";
import { getSectionFomString } from "@/utils/functions/getsectionfromurl";
import { useThemeContext } from "@/contexts/theme-context";

import {
  HOME_NAVBAR_LINKS_TEXT,
  LIGHT_THEME_DEFAULT,
  DARK_THEME_DEFAULT,
} from "@/app/global-text-styles";

type MobileSidemenuPropsType = {
  action: () => void;
};

const MobileSidemenuHomepage: FC<MobileSidemenuPropsType> = ({ action }) => {
  const { isDarkThemeOn  } = useThemeContext();
  return (
    <nav className={isDarkThemeOn ? "dark" : ""}>
      <div className={`z-[999] top-3 right-3 ${LIGHT_THEME_DEFAULT} ${DARK_THEME_DEFAULT}`}>
        <div className="flex justify-start">
          <ul className="list-none flex flex-col space-y-1 mt-3 mx-3">
            {homepageSections &&
              homepageSections.map((section, index) => (
                <li key={index} onClick={action}>
                  <Link
                    className={`${HOME_NAVBAR_LINKS_TEXT} pb-[2px] border-b-[1px] border-solid border-transparent transition-all duration-300 hover:border-current`}
                    href={getSectionFomString(section)}>
                    {section}
                  </Link>
                </li>
              ))}
            <br />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileSidemenuHomepage;
