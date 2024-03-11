type GenericTextInputComponentProps = {
  name: string;
  state?: string;
  setState?: string;
  validateInput?: () => string | void;
};

const GenericTextInputComponent = ({
  name,
  state,
  setState,
  validateInput,
}: GenericTextInputComponentProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="bg-blue-400 flex justify-between">
        <label
          htmlFor="name"
          className="xbg-green-300 mb-1 font-aperçu text-xs small-caps text-[#D9D9D9] leading-[.5rem] tracking-wide">
          {name}
        </label>
        {name === "password" ? <span className="leading-[.5rem]">p</span> : null}
      </div>
      <input
        type="text"
        name="name"
        className="h-4 font-aperçu text-sm bg-[#222222] border-[#D9D9D9] border-b-[0.5px] focus:border-[#94C2A4] font-light focus:outline-none  appearance-none pb-[.15rem] focus:shadow-red-400"
      />
      <div className="text-red-700  text-[0.625rem] italic leading-[.5rem]">Error</div>
    </div>
  );
};

export default GenericTextInputComponent;
