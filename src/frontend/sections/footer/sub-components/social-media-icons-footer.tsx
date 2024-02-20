import XIcon from "../../../components/icons/x-icon";
import FacebookIcon from "../../../components/icons/facebook-icon";
import LinkedinIcon from "../../../components/icons/linkedin-icon";

const SocialMediaIcons = () => {
  return (
    <nav className="flex space-x-7">
      <a
        aria-label="X"
        href="https://www.twitter.com"
        title="twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className=""
        >
        <XIcon scale={0.7} />
      </a>
      <a
        aria-label="Facebook"
        href="https://www.facebook.com"
        title="facebook.com"
        target="_blank"
        rel="noopener noreferrer">
        <FacebookIcon scale={0.7} />
      </a>
      <a
        aria-label="Linkedin"
        href="https://www.linkedin.com"
        title="linkedin.com"
        target="_blank"
        rel="noopener noreferrer">
        <LinkedinIcon scale={0.7} />
      </a>
    </nav>
  );
};

export default SocialMediaIcons;
