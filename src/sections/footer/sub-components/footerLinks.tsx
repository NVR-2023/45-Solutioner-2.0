import React, { ReactNode } from "react";
import getCurrentYearSpan from "@/utils/functions/getCurrentYearSpan";
import SocialMediaIcons from "./social-media-icons-footer";
import { FooterLinkColumnType } from "@/types/component-props-types";


type FooterLinkListType = FooterLinkColumnType[];

const footerLinkArray: FooterLinkListType = [
  {
    label: "company",
    links: ["About us", "Contact", "Providers", "Jobs", "Press kit"],
  },
  { label: "legal", links: ["Terms of use", "Privacy policy", "Cookie policy"] },
  {
    label: "social media",
    socialMediaIcons: { children: <SocialMediaIcons /> },
    links: [`©${getCurrentYearSpan()} Nuno Violante Rodrigues. All rights reserved.`],
  },
];

export default footerLinkArray;
