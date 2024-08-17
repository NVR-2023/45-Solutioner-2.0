import RollupContent from "../../styled-text-components/rollup-content";

type PriceTagProps = {
  price: string;
};

const PriceTag = ({ price }: PriceTagProps) => {
  return (
    <span className="flex w-full justify-center rounded-[2px] bg-neutral-200">
      <span className="text-[.625rem]">€</span>
      <RollupContent text={price} />
    </span>
  );
};

export default PriceTag;
