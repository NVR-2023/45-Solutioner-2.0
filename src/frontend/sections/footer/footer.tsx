
import FooterLinksSegment from "./sub-components/footer-links-segment";
import FooterSocialSegment from "./sub-components/footer-social-segment";
import { linkArrayFooter } from "./sub-components/linh-array-footer";

const Footer = () => {
  return (
    <footer className="bg-neutral-400 dark:bg-neutral-700 dark:text-neutral-300">
      <div className="smooth-theme-transition flex flex-col space-y-4 p-4 md:flex-row md:justify-around md:space-y-0">
        <FooterLinksSegment linkList={linkArrayFooter[0]} />
        <FooterLinksSegment linkList={linkArrayFooter[1]} />
        <FooterSocialSegment />
      </div>
    </footer>
  );
};

export default Footer;
