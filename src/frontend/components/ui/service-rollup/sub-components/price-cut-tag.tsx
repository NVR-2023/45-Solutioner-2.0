type PriceCutTagProps = {
  sale: string;
};
const PriceCutTag = ({ sale }: PriceCutTagProps) => {
  const processedSaleString = `-${(parseFloat(sale) * 100).toString()}%`;
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-4 -skew-x-12 items-center justify-center border-[1.2px] border-neutral-700 ">
        <div className="tabular-numsflex skew-x-12 items-center justify-center px-1 font-aperçu text-sm font-bold leading-[.5rem] tracking-wider text-neutral-700 small-caps  md:text-[.625rem]">
          {processedSaleString}
        </div>
      </div>
    </div>
  );
};

export default PriceCutTag;
