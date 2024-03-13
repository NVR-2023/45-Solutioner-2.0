import { Dispatch, SetStateAction } from "react";
import PasswordInvisibleIcon from "../../icons/password-invisible-icon";
import PasswordVisibleIcon from "../../icons/password-visible-icon";

type PasswordVisibilityToggleProps = {
  scale?: number;
  color?: string;
  isPasswordVisible: boolean;
  setIsPasswordVisible: Dispatch<SetStateAction<boolean>>;
};

const PasswordVisibilityToggle = ({
  scale = 1,
  color = "currentColor",
  isPasswordVisible = false,
  setIsPasswordVisible,
}: PasswordVisibilityToggleProps) => {
  const handleOnToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div onClick={handleOnToggle}>
      {isPasswordVisible ? (
        <div
          className={`transition-opacity transition-700 ${
            isPasswordVisible ? "opacity-100" : "opacity-0"
          }`}>
          <PasswordVisibleIcon scale={scale} color={color} />
        </div>
      ) : (
        <div
          className={`transition-opacity transition-700 ${
            !isPasswordVisible ? "opacity-100" : "opacity-0"
          }`}>
          <PasswordInvisibleIcon scale={scale} color={color} />
        </div>
      )}
    </div>
  );
};

export default PasswordVisibilityToggle;
