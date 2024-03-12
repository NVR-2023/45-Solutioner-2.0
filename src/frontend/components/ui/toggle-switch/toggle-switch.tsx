import React, { ComponentType, Dispatch, SetStateAction } from "react";
import { BasicComponentProps } from "@/types/component-props-types";

type ToggleProps = BasicComponentProps & {
  firstIcon: ComponentType<BasicComponentProps>;
  secondIcon: ComponentType<BasicComponentProps>;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

const ToggleSwitch = ({
  scale = 1,
  color = "currentColor",
  firstIcon: FirstIcon,
  secondIcon: SecondIcon,
  state,
  setState,
}: ToggleProps) => {
  const handleToggle = () => {
    setState(!state);
  };

  return (
    <button
      className="relative"
      onClick={handleToggle}
      role="button"
      aria-label={state ? "Toggle Off" : "Toggle On"}>
      <div className="flex overflow-hidden items-center justify-center w-6 h-6">
        <div
          className={`absolute -left-3 top-0 w-6 h-6 flex transition-transform duration-300 ease-in-out ${
            state ? "translate-x-3" : "-translate-x-3"
          }`}>
          <div className="w-6 h-6 flex justify-center items-center">
            {state ? (
              <FirstIcon scale={scale} color={color} />
            ) : (
              <SecondIcon scale={scale} color={color} />
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

export default ToggleSwitch;
