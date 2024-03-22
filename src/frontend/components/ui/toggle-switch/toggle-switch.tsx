import { ComponentType, Dispatch, SetStateAction } from "react";

type IconType = ComponentType<{ scale: number; color: string }>;

type ToggleProps = {
  firstIcon: IconType;
  secondIcon: IconType;
  booleanState: boolean;
  setBooleanState: Dispatch<SetStateAction<boolean>>;
  scale?: number;
  color?: string;
};

const ToggleSwitch = ({
  firstIcon: FirstIcon,
  secondIcon: SecondIcon,
  booleanState,
  setBooleanState,
  scale = 1,
  color = "currentColor",
}: ToggleProps) => {
  
  const handleOnToggle = () => {
    console.log(`on toggle: ${booleanState}`)
    setBooleanState((prevState) => !prevState);
  };

  return (
    <button
      type="button"
      className=" flex h-full w-full items-center justify-center"
      onClick={handleOnToggle}
      role="toggle"
      aria-label={booleanState ? "Toggle Off" : "Toggle On"}
    >
      <div className="relative">
        <div
          className={` absolute top-1/2 -translate-y-1/2 transform  transition-opacity duration-500 ${
            booleanState ? "opacity-0" : "opacity-100"
          }`}
        >
          <FirstIcon scale={scale} color={color} />
        </div>
        <div
          className={`absolute top-1/2 -translate-y-1/2 transform  transition-opacity duration-500  ${
            booleanState ? "opacity-100" : "opacity-0"
          }`}
        >
          <SecondIcon scale={scale} color={color} />
        </div>
      </div>
    </button>
  );
};

export default ToggleSwitch;
