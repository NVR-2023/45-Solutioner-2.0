import React, { FC } from "react";
import homepageSections from "@/frontend/sections/navbar-homepage/sub-components/homepage-sections";
import Link from "next/link";
import { getSectionFomString } from "@/utils/functions/getsectionfromurl";


type MobileSidemenuPropsType = {
  action: () => void;
};

const MobileSidemenuHomepage: FC<MobileSidemenuPropsType> = ({ action }) => {
  return (
    <nav className="z-[999] mt-3.5 -me-3 text-base font-semibold bg-neutral-300 dark:bg-neutral-700 bg-opacity-70 dark:bg-opacity-70">
      <div className="flex justify-start">
        <ul className="list-none flex flex-col space-y-1 mt-3 mx-3">
          {homepageSections &&
            homepageSections.map((section, index) => (
              <li key={index} onClick={action}>
                <Link
                  className="pb-[2px] border-b-[1px] border-solid border-transparent transition-all duration-300 hover:border-current"
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
