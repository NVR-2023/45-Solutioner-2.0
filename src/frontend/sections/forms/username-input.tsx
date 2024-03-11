const UserNameInput = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label
          htmlFor="name"
          className="mb-2 font-aperçu text-xs small-caps text-[#D9D9D9] leading-[.5rem] tracking-wide">
          name
        </label>
        <span>p</span>
      </div>
      <input
        type="text"
        name="name"
        className="h-4 mb-1 font-aperçu text-sm bg-[#222222] border-[#D9D9D9] border-b-[0.5px] focus:border-[#94C2A4] font-light focus:outline-none  appearance-none pb-[.15rem]"
      />
      <div className="text-red-700  text-[0.625rem] italic">Error</div>
    </div>
  );
};

export default UserNameInput;
