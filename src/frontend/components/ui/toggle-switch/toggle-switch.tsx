import { ComponentType , Dispatch, SetStateAction } from "react";

type IconType = ComponentType<{ scale: number; color: string }>;

type ToggleProps = {
  firstIcon: IconType;
  secondIcon: IconType;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
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


  const handleToggle = () => {
    setState((prevState) => !prevState);
  };


  return (
    <button
      type="button"
      className="flex items-center"
      onClick={handleToggle}
      role="button"
      aria-label={state ? "Toggle Off" : "Toggle On"}
    >
      <div className="relative">
        <div
          className={`absolute left-0 top-1/2 -translate-y-1/2 transform transition-opacity duration-500 ${
            state ? "opacity-0" : "opacity-100"
          }`}
        >
          <FirstIcon scale={scale} color={color} />
        </div>
        <div
          className={`absolute left-0 top-1/2 -translate-y-1/2 transform transition-opacity duration-00 ${
            state ? "opacity-100" : "opacity-0"
          }`}
        >
          <SecondIcon scale={scale} color={color} />
        </div>
      </div>
    </button>
  );
};

export default ToggleSwitch;
