import InvertedTag from "../../styled-text-components/inverted-tag";

const SaleTag = () => {
  return (
    <div className="flex h-4 -skew-x-12 items-center justify-center bg-yellow-500 text-neutral-200">
      <div className="flex skew-x-12 items-center justify-center px-1">
        <InvertedTag text={"sale"} />
      </div>
    </div>
  );
};

export default SaleTag;
