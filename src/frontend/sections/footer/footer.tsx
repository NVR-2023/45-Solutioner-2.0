import FooterLinksSegment from "./sub-components/footer-links-segment";
import FooterSocialSegment from "./sub-components/footer-social-segment";

const Footer = () => {
  type FooterLinkSegmentType = {
    label: string;
    links: string[];
  };

  type FooterLinkListType = FooterLinkSegmentType[];

  const footerLinkArray: FooterLinkListType = [
    {
      label: "company",
      links: ["About us", "Contact us", "Jobs", "Press kit"],
    },
    { label: "legal", links: ["Terms of use", "Privacy policy", "Cookie policy"] },
  ];

  return (
    <footer className="bg-neutral-400 dark:bg-neutral-700 text-black dark:text-white smooth-theme-transition flex flex-col md:flex-row md:justify-around space-y-3 md:space-y-0 p-4">
      <FooterLinksSegment linkList={footerLinkArray[0]} />
      <FooterLinksSegment linkList={footerLinkArray[1]} />
      <FooterSocialSegment />
    </footer>
  );
};

export default Footer;
