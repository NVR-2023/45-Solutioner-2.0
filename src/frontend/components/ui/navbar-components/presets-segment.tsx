import PresetButton from "./preset-button";
import { PresetProps } from "@/frontend/sections/mavbar-book-services-content/navbar-book-services-content";
import FieldLabel from "../styled-text-components/field-label";

type PresetListType = { presetList: PresetProps[] | null };

const PresetsSegment = ({ presetList }: PresetListType) => {
  return (
    <div className="flex h-4 w-[11.25rem] items-center space-x-2 ">
     
     <FieldLabel text={"presets:"} />
      <div className="flex justify-between space-x-4" id="preset area">
        {presetList?.map((preset, index) => {
          return (
            <span
              key={`preset-${index}`}
              className={`flex items-center justify-center`}
            >
              <PresetButton
                label={preset.label}
                tailwindIconColorClass={preset.tailwindIconColorClass}
                preset={preset.preset}
                scale={0.75}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default PresetsSegment;
