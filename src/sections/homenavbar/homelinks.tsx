import React, { FC } from "react";
import Link from "next/link";

import { linkListType } from "@/types/componentpopstypes";

const HomeLinks: FC = () => {
  const linkArray: linkListType = [
    { name: "Services", sectionHash: "#services" },
    { name: "Security", sectionHash: "#security" },
    { name: "Pricing", sectionHash: "#pricing" },
  ];

  return (
    <div className="flex space-x-7">
      {linkArray.map((link, index) => (
        <Link
          key={link.sectionHash}
          href={link.sectionHash}
          className="flex items-center font-aperçu font-bold text-base tracking-wide"
          style={{}}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default HomeLinks;
