import React, { FC, Fragment } from "react";

import footerLinkArray from "./sub-components/footer-links-array";
import FooterLinksSegment from "./sub-components/footer-links-segment";
import FooterSocialSegment from "./sub-components/footer-social-segment";

const Footer: FC = () => {

  return (
    <footer className="bg-neutral-400 dark:bg-neutral-700 text-black dark:text-white flex flex-col md:flex-row md:justify-around space-y-3 md-space-y-0 p-4">
      <FooterLinksSegment linkList={footerLinkArray[0]} />
      <FooterLinksSegment linkList={footerLinkArray[1]} />
      <FooterSocialSegment />
    </footer>
  );
};

export default Footer;
