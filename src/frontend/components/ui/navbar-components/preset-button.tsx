import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

import { BasicComponentProps } from "@/types/component-props-types";
import PresetIcon from "@/frontend/components/icons/preset-icon";
import { PresetProps } from "@/frontend/sections/mavbar-book-services-content/navbar-book-services-content";

import FieldContent from "../styled-text-components/field-content";
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
      className="mt-[3px] flex"
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: isPresetHovered ? "0fr" : "1fr",
          transition: "grid-template-columns 180ms",
        }}
      >
        <div className="overflow-hidden">
          <div className={` overflow-hidden  ${tailwindIconColorClass}`}>
            <PresetIcon scale={scale} />
          </div>
        </div>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: isPresetHovered ? "1fr" : "0fr",
          transition: "grid-template-columns 180ms",
        }}
      >
        <div className="flex overflow-hidden">
          <FieldContent text={label} />
        </div>
      </div>
    </button>
  );
};

export default PresetButton;

/* className =" font-aperçu text-sm font-bold text-black dark:text-neutral-300 md:text-xs";
 */

/*     <button
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className={` leading-[10rem] transition-[width] duration-300 ${isPresetHovered ? "w-12" : "w-4"}`}
    >
      {isPresetHovered ? (
        <div
          onClick={handleOnClick}
          className=" font-aperçu text-sm font-bold text-black dark:text-neutral-300 md:text-xs"
        >
          {label}
        </div>
      ) : (
        <div className={` pt-[3px] ${tailwindIconColorClass}`}>
          <PresetIcon scale={scale} />
        </div>
      )}
    </button>; */
