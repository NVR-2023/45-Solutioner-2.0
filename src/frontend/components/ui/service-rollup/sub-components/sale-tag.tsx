const SaleTag = () => {
  return (
    <div className="flex">
      <div
        className={`h-4.5 w-1.5 -skew-x-12}`}
      ></div>
      <div className="flex h-4 -skew-x-12 items-center bg-amber-300">
        <span className="flex skew-x-12 items-center p-1 font-aperçu text-sm font-[700] leading-[.5rem] tracking-wider text-white small-caps dark:text-neutral-900 md:text-[.625rem]">
          sale
        </span>
      </div>
    </div>
  ); 
};

export default SaleTag;
