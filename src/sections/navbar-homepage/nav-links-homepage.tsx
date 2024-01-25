import React, { FC } from "react";
import Link from "next/link";
import { getSectionFomString } from "@/utils/getsectionfromurl";

const HomeSectionLinks: FC = () => {
  const sectionLinksArray: string[] = ["Services", "Security", "Pricing"];

  return (
    <div className="flex h-full space-x-7">
      {sectionLinksArray.map((link, index) => (
        <li className="list-none" key={index}>
          <Link
            href={getSectionFomString(link)}
            className="flex h-full items-center font-aperçu font-bold text-sm text-green-700 tracking-wide"
            style={{}}>
            {link}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default HomeSectionLinks;
