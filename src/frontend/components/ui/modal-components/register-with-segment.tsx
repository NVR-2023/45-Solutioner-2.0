import GoogleIcon from "../../icons/google-icon";
import FacebookIcon from "../../icons/facebook-icon";
import PlainTextNotice from "../styled-text-components/plain-text-notice-text";

const RegisterWIthSegment = () => {
  return (
    <div className="flex items-baseline space-x-1">
      <PlainTextNotice text={"Register with"} />
      <div className="flex space-x-1.5">
        <span className="">
          <GoogleIcon scale={0.25} />
        </span>
        <span className="">
          <FacebookIcon scale={0.5} />
        </span>
      </div>
    </div>
  );
};

export default RegisterWIthSegment;
