import MoneyIcon from "@/frontend/components/icons/money-icon";

const OnSaleSegment = () => {
  return (
    <div className="flex">
      <div className="flex h-4 -skew-x-12 items-center bg-yellow-400">
        <span className="flex skew-x-12 items-center px-1 font-aperçu text-sm font-bold leading-[.5rem] tracking-wider small-caps text-red-500 md:text-[.625rem]">
          sale
        </span>
      </div>
    </div>
  );
};

export default OnSaleSegment;
