import GoogleIcon from "../../icons/google-icon";
import FacebookIcon from "../../icons/facebook-icon";

const RegisterWIthSegment = () => {
  return (
    <div className="flex space-x-1">
      <span className="text-[10px] font-semibold tracking-normal">Register with</span>
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
