import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

import { BasicComponentProps } from "@/types/component-props-types";
import PresetIcon from "@/frontend/components/icons/preset-icon";
import { PresetProps } from "@/frontend/sections/mavbar-book-services-content/navbar-book-services-content";

type PresetButtonProps = BasicComponentProps & PresetProps;

const PresetButton = ({
  scale,
  tailwindIconColorClass,
  label,
  preset,
}: PresetButtonProps) => {
  const [isPresetHovered, setIsPresetHovered] = useState(false);

  const router = useRouter();
  const pathName = usePathname();
  const existingSearchParams = useSearchParams();

  const handleOnMouseEnter = () => {
    setIsPresetHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsPresetHovered(false);
  };

  const handleOnClick = () => {
    const newSearchParams = new URLSearchParams(existingSearchParams);
    for (const param in preset) {
      const normalizedParam = param.replace("_", " ");
      if (newSearchParams.has(normalizedParam)) {
        newSearchParams.set(normalizedParam, preset[param]);
      }
    }
    const newQueryString = newSearchParams.toString();
    const newURL = `${pathName}?${newQueryString}`;
    router.replace(newURL);
    setIsPresetHovered(false);
  };

  return (
    <button
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={handleOnClick}
      className="flex w-4 hover:w-12 transition-all duration-300"
    >
      {isPresetHovered ? (
        <div className="font-aperçu text-sm font-bold leading-[.5rem] text-black dark:text-neutral-300 md:text-xs">
          {label}
        </div>
      ) : (
        <div className={`pt-[3px] ${tailwindIconColorClass}`}>
          <PresetIcon scale={scale} />
        </div>
      )}
    </button>
  );
};

export default PresetButton;
