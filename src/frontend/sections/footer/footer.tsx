import FooterLinksSegment from "./sub-components/footer-links-segment";
import FooterSocialSegment from "./sub-components/footer-social-segment";
import { linkArrayFooter } from "./sub-components/linh-array-footer";

const Footer = () => {
  return (
    <footer className="bg-neutral-400 dark:bg-neutral-700 text-black dark:text-white smooth-theme-transition flex flex-col md:flex-row md:justify-around space-y-3 md:space-y-0 p-4">
      <FooterLinksSegment linkList={linkArrayFooter[0]} />
      <FooterLinksSegment linkList={linkArrayFooter[1]} />
      <FooterSocialSegment />
    </footer>
  );
};

export default Footer;
