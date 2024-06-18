import InvertedTag from "../../styled-text-components/inverted-tag";
import { serviceCAtegoryColorMap } from "@/utils/data/service-category-color-map";

type ServiceCategoryRollupLabelProps = {
  category: string;
};

const ServiceCategoryRollupTag = ({
  category,
}: ServiceCategoryRollupLabelProps) => {


  return (
    <div className="flex">
      <div
        className={`h-4.5 w-1.5 -skew-x-12 ${serviceCAtegoryColorMap.get(category)}`}
      ></div>
      <div className="flex h-4 -skew-x-12 items-center bg-[#acacac]">
        <span className="flex skew-x-12 items-center px-3">
          <InvertedTag text={category} />
        </span>
      </div>
    </div>
  );
};

export default ServiceCategoryRollupTag;
