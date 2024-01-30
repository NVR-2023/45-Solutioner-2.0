import React, {ReactNode} from "react";
import getCurrentYear from "@/utils/functions/getCurrentYear";
import SocialMediaIcons from "./social-media-icons-footer";

type FooterLinkColumnType = {
  label: string;
  links?: string[];
  socialMediaIcons?: { children: ReactNode };
  caption?: string;
};

type FooterLinkListType = FooterLinkColumnType[];

const footerLinkArray: FooterLinkListType = [
  {
    label: "company",
    links: ["About us", "Contact us", "Providers", "Jobs", "Press kit"],
    caption: `©${getCurrentYear()} Nuno Violante odrigues`,
  },
  { label: "legal", links: ["Terms of use", "Privacy policy", "Cookie policy"] },
  {
    label: "social media",
    socialMediaIcons: { children: <SocialMediaIcons /> },
  },
];

export default footerLinkArray;
