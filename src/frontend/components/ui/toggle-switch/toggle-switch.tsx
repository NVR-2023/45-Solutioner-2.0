import { ComponentType, Dispatch, SetStateAction, useCallback } from "react";

type IconType = ComponentType<{ scale: number; color: string }>;

type ToggleProps = {
  firstIcon: IconType;
  secondIcon: IconType;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
  scale?: number;
  color?: string;
};

const ToggleSwitch = ({
  firstIcon: FirstIcon,
  secondIcon: SecondIcon,
  toggle,
  setToggle,
  scale = 1,
  color = "currentColor",
}: ToggleProps) => {
  const handleOnToggle = useCallback(() => {
    setToggle((previousValue) => !previousValue);
  }, [setToggle]);

  return (
    <button
      type="button"
      className="flex h-full w-full items-center justify-center"
      onClick={handleOnToggle}
      role="toggle"
      aria-label={toggle ? "Toggle Off" : "Toggle On"}
    >
      <div className="relative pb-3">
        <div
          className={`absolute right-0 top-0 transition-opacity duration-500 ${
            toggle ? "opacity-0" : "opacity-100"
          }`}
        >
          <FirstIcon scale={scale} color={color} />
        </div>
        <div
          className={`absolute right-0 top-0 transform transition-opacity duration-500 ${
            toggle ? "opacity-100" : "opacity-0"
          }`}
        >
          <SecondIcon scale={scale} color={color} />
        </div>
      </div>
    </button>
  );
};

export default ToggleSwitch;
