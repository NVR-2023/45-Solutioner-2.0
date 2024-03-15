import { FOOTER_BACKGROUND, TEXT_COLOR } from "@/app/global-styles.";

import FooterLinksSegment from "./sub-components/footer-links-segment";
import FooterSocialSegment from "./sub-components/footer-social-segment";
import { linkArrayFooter } from "./sub-components/linh-array-footer";

const Footer = () => {
  return (
    <footer className={`${FOOTER_BACKGROUND} ${TEXT_COLOR}`}>
      <div className="smooth-theme-transition flex flex-col space-y-4 p-4 md:flex-row md:justify-around md:space-y-0">
        <FooterLinksSegment linkList={linkArrayFooter[0]} />
        <FooterLinksSegment linkList={linkArrayFooter[1]} />
        <FooterSocialSegment />
      </div>
    </footer>
  );
};

export default Footer;
