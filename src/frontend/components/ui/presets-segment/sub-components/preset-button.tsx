import { useSearchParams } from "next/navigation";

import { BasicComponentProps } from "@/types/component-props-types";
import PresetIcon from "@/frontend/components/icons/preset-icon";

type PresetButtonProps = BasicComponentProps & {
  preset?: Record<string, string>;
};

const PresetButton = ({ scale, color }: PresetButtonProps) => {
  const handleOnClick = () => {
    return null;
  };

  return (
    <button onClick={handleOnClick}>
      <PresetIcon scale={scale} color={color} />
    </button>
  );
};

export default PresetButton;
