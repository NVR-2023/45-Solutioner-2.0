import PresetButton from "./sub-components/preset-button";

const PresetsSegment = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <label
        htmlFor="searchBar"
        className="flex font-aperçu text-sm font-extrabold leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs"
      >
        presets:
      </label>
      <div className="flex">
        <span className="flex items-center justify-center text-blue-700">
          <PresetButton
            preset={{
              category: "",
              price: " ",
            }}
            scale={0.7}
          />
        </span>
        <span className="flex items-center justify-center text-amber-500">
          <PresetButton
            preset={{
              category: "",
              price: " ",
            }}
            scale={0.7}
          />
        </span>
        <span className="flex items-center justify-center text-neutral-500">
          <PresetButton
            preset={{
              category: "any",
              price: "any",
              
            }}
            scale={0.7}
          />
        </span>
      </div>
    </div>
  );
};

export default PresetsSegment;
