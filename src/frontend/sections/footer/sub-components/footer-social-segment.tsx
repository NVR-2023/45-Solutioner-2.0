import SocialMediaIcons from "./social-media-icons-footer";
import getCurrentYearSpan from "@/utils/functions/getCurrentYearSpan";

const FooterSocialSegment = () => {
  return (
    <nav key="social" className="flex flex-col space-y-4 md:spae-t-0">
      <div className="block space-y-2">
        <label
          className="me-2 text-sm font-bold tracking-wide small-caps md:mb-2 md:me-0"
          id="footerHeading"
        >
          social
        </label>
        <div>
          <SocialMediaIcons />
        </div>
      </div>
      <div className="flex pt-2 text-xs tracking-wide md:text-[0.5rem]">
        <span className="font-[700]">©&nbsp;</span>
        <span className="font-semibold">{`${getCurrentYearSpan()} Nuno Rodrigues. All rights reserved.`}</span>
      </div>
    </nav>
  );
};

export default FooterSocialSegment;
