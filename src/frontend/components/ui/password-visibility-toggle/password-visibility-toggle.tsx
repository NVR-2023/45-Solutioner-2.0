import useToggle from "@/frontend/hooks/use-toggle";
import PasswordVisibleIcon from "../../icons/password-visible-icon";
import PasswordInvisibleIcon from "../../icons/password-invisible-icon";
import { BasicComponentProps } from "@/types/component-props-types";



const PasswordVisibilityToggle = ({ scale=1 , color = "currentColor" } : BasicComponentProps) => {
  const { state, handlers } = useToggle();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => handlers.toggle();

  return (
    <button onClick={handleClick} className="">
      {state ? (
        <div className="">
          <PasswordInvisibleIcon scale={scale} color={color} />
        </div>
      ) : (
        <div className="">
          <PasswordVisibleIcon scale={scale} color={color}  />
        </div>
      )}
    </button>
  );
};

export default PasswordVisibilityToggle;
