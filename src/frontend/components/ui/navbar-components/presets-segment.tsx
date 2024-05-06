import PresetButton from "./preset-button";

type PresetSegmentProps = {
  presetList: Record<string, string>[] | null;
};

const PresetsSegment = ({ presetList }: PresetSegmentProps) => {
  const tailwindColorClasses = [
    "text-blue-700",
    "text-yellow-500",
    "text-neutral-500",
  ];
  return (
    <div className="flex items-center justify-center space-x-2">
      <label
        htmlFor="searchBar"
        className="flex border-s-[0.7px] border-black ps-1.5 font-aperçu  text-sm font-[700] leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs"
      >
        presets:
      </label>
      <div className="flex space-x-3 pt-[3px]">
        {presetList?.map((preset, index) => {
          return (
            <span
              key={`preset-${index}`}
              className={`flex items-center justify-center ${tailwindColorClasses[index]}`}
            >
              <PresetButton preset={preset} scale={0.7} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default PresetsSegment;

/* 
       <span className="flex items-center justify-center text-blue-700">
          <PresetButton
            preset={{
              category: "any",
              price: "€0-30",
              sort_by: "cheaper",
            }}
            scale={0.7}
          />
        </span>
        <span className="flex items-center justify-center text-amber-500">
          <PresetButton
            preset={{
              category: "any",
              price: "€60-120",
              sort_by: "pricier",
            }}
            scale={0.7}
          />
        </span>
        <span className="flex items-center justify-center text-neutral-500">
          <PresetButton
            preset={{
              category: "any",
              price: "any",
              sort_by: "cheaper",
              search: "",
            }}
            scale={0.7}
          />
        </span> */
