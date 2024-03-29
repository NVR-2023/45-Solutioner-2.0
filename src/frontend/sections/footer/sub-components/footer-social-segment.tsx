import SocialMediaIcons from "./social-media-icons-footer";
import getCurrentYearSpan from "@/utils/functions/getCurrentYearSpan";

const FooterSocialSegment = () => {
  return (
    <nav key="social" className="flex flex-col">
      <div className="flex md:block">
        <div
          className="text-sm font-bold small-caps tracking-wide me-2 md:me-0 md:mb-2"
          id="footerHeading">
          social
        </div>
        <SocialMediaIcons />
      </div>
      <div className="pt-2 flex flex-col md:flex-row font-semibold md:text-[0.6rem] text-xs tracking-wide">
        {`©${getCurrentYearSpan()} Nuno Rodrigues. All rights reserved.`}
      </div>
    </nav>
  );
};

export default FooterSocialSegment;
