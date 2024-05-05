import { useSearchParams } from "next/navigation";
import { AllServiceStaticDataType } from "@/utils/functions/fetch-data/services-endpoint-submissions";

type useFilterAndSortServicesProps =  AllServiceStaticDataType | null;


const useFilterAndSortServices = (
  allServicesStaticData: useFilterAndSortServicesProps) => {
  const searchParams = useSearchParams();

  const categorySearchParam = searchParams.get("category");
  const priceSearchParam = searchParams.get("price");
  const lowerPriceLimit =
    priceSearchParam !== "any"
      ? parseInt(priceSearchParam!.split("-")[0].slice(1))
      : null;
  const upperPriceLimit =
    priceSearchParam !== "any"
      ? parseInt(priceSearchParam!.split("-")[1])
      : null;

  const searchSearchParam = searchParams.get("search");
  const sortBySearchParam = searchParams.get("sort by");

  const filteredServiceStaticData = allServicesStaticData?.filter((service) => {
    if (
      categorySearchParam !== "any" &&
      service.category !== categorySearchParam
    ) {
      return false;
    }

    if (
      priceSearchParam !== "any" &&
      (parseInt(service.price) < lowerPriceLimit! ||
        parseInt(service.price) > upperPriceLimit!)
    ) {
      return false;
    }

    if (
      searchSearchParam?.trim() !== "" &&
      !service.category.toLowerCase().includes(searchSearchParam) &&
      !service.service.toLowerCase().includes(searchSearchParam) &&
      !service.description.toLowerCase().includes(searchSearchParam)
    ) {
      return false;
    }

    return true;
  });


  return filteredServiceStaticData;
};

export default useFilterAndSortServices;
