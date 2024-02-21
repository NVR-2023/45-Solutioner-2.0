type FooterLinkSegmentType = {
  label: string;
  links: string[];
};

type FooterLinkListType = FooterLinkSegmentType[];

export const linkArrayFooter: FooterLinkListType = [
  {
    label: "company",
    links: ["About us", "Contact us", "Jobs", "Press kit"],
  },
  { label: "legal", links: ["Terms of use", "Privacy policy", "Cookie policy"] },
];
