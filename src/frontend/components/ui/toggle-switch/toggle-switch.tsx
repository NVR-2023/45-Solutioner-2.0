import { ComponentType, Dispatch, SetStateAction } from "react";

type IconType = ComponentType<{ scale: number; color: string }>;
type StateType = string | boolean;

type ToggleProps = {
  firstIcon: IconType;
  secondIcon: IconType;
  state: StateType;
  setState: Dispatch<SetStateAction<StateType>>;
  scale?: number;
  color?: string;
};

const ToggleSwitch = ({
  firstIcon: FirstIcon,
  secondIcon: SecondIcon,
  state,
  setState,
  scale = 1,
  color = "currentColor",
}: ToggleProps) => {
  const handleOnToggle = () => {
    const newState =
      typeof state === "boolean" ? !state : state === "true" ? "false" : "true";
    setState(newState);
  };

  return (
    <button
      type="button"
      className=" flex h-full w-full items-center justify-center"
      onClick={handleOnToggle}
      role="toggle"
      aria-label={
        state === true || state === "true" ? "Toggle On" : "Toggle Off"
      }
    >
      <div className="relative">
        <div
          className={` absolute top-1/2 -translate-y-1/2 transform  transition-opacity duration-500 ${
            state === true || state === "true" ? "opacity-0" : "opacity-100"
          }`}
        >
          <FirstIcon scale={scale} color={color} />
        </div>
        <div
          className={`absolute top-1/2 -translate-y-1/2 transform  transition-opacity duration-500  ${
            state === true || state === "true" ? "opacity-100" : "opacity-0"
          }`}
        >
          <SecondIcon scale={scale} color={color} />
        </div>
      </div>
    </button>
  );
};

export default ToggleSwitch;
