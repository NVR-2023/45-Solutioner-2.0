import { useRouter, usePathname, useSearchParams } from "next/navigation";
type ServiceCategoryRollupLabelProps = {
  category: string;
};
const ServiceCategoryRollupLabel = ({
  category,
}: ServiceCategoryRollupLabelProps) => {
  const serviceColorMap = new Map([
    ["cleaning", "bg-[#32CD32]"],
    ["wardrobe", "bg-[#FF0000]"],
    ["plumbing", "bg-[#AFEEEE]"],
    ["electrical", "bg-[#FFFF00]"],
    ["hvac", "bg-[#A020F0]"],
    ["security", "bg-[#9400D3]"],
    ["handyman", "bg-[#EE4B2B]"],
    ["patching", "bg-[#DFFF00]"],
    ["gardening", "bg-[#008000]"],
    ["extermination", "bg-[#008080]"],
    ["eventing", "bg-[#A020F0]"],
    ["companionship", "bg-[#FF69B5]"],
    ["grooming", "bg-[#000080]"],
    ["nursing", "bg-[#86efac]"],
    ["nannying", "bg-[#00FFFF]"],
    ["petcare", "bg-[#964B00]"],
    ["wellness", "bg-[#FFC0CB]"],
  ]);

  const pathName = usePathname();
  const router = useRouter();
  const existingSearchParams = useSearchParams();

  const handleOnClick = () => {
    const newSearchParams = new URLSearchParams(existingSearchParams);

    const currentSearchCategory = existingSearchParams.get("category");

    if (currentSearchCategory === "any") {
      newSearchParams.set("category", category);
    } else {
      newSearchParams.set("category", "any");
    }

    const newQueryString = newSearchParams.toString();
    const newURL = `${pathName}?${newQueryString}`;
    router.replace(newURL);
  };

  return (
    <div role="button" onClick={handleOnClick} className="flex">
      <div
        className={`h-4.5 w-1.5 -skew-x-12 ${serviceColorMap.get(category)}`}
      ></div>
      <div className="flex h-4 -skew-x-12 items-center bg-[#acacac]">
        <span className="flex skew-x-12 items-center px-3 font-aperçu text-sm font-[400] leading-[.5rem] tracking-wider text-white small-caps dark:text-neutral-900 md:text-[.625rem]">
          {category}
        </span>
      </div>
    </div>
  );
};

export default ServiceCategoryRollupLabel;
