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
    console.log(state)
  };


  return (
    <button
    type="button"
      className="relative"
      onClick={handleToggle}
      role="button"
      aria-label={state ? "Toggle Off" : "Toggle On"}
    >
      <div className="relative size-6">
        <div
          className={`absolute left-0 top-0 transition-opacity duration-300 ${
            state ? "opacity-100" : "opacity-0"
          }`}
        >
          <FirstIcon scale={scale} color={color} />
        </div>
        <div
          className={`absolute left-0 top-0 transition-opacity duration-300 ${
            state ? "opacity-0" : "opacity-100"
          }`}
        >
          <SecondIcon scale={scale} color={color} />
        </div>
      </div>
    </button>
  );
};

export default ToggleSwitch;
