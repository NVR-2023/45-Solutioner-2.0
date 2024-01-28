import React, { FC } from "react";
import Link from "next/link";
import { getSectionFomString } from "@/utils/getsectionfromurl";
import sectionLinksArray from "./section-list-array.t";

const HomeSectionLinks: FC = () => {
  return (
    <div className="flex items-center space-x-7">
      {sectionLinksArray.map((link, index) => (
        <li className="list-none" key={index}>
          <Link
            href={getSectionFomString(link)}
            className="flex items-center font-aperçu font-semibold text-sm"
            style={{}}>
            {link}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default HomeSectionLinks;
