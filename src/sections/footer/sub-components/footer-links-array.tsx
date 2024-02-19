import React, { ReactNode } from "react";
import { FooterLinkSegmentType } from "@/types/component-props-types";

type FooterLinkListType = FooterLinkSegmentType[];

const footerLinkArray: FooterLinkListType = [
  {
    label: "company",
    links: ["About us", "Contact us", "Jobs", "Press kit"],
  },
  { label: "legal", links: ["Terms of use", "Privacy policy", "Cookie policy"] },
];

export default footerLinkArray;
