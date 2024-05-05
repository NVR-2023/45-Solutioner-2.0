import { useSearchParams } from "next/navigation";
import { AllServiceStaticDataType } from "@/utils/functions/fetch-data/services-endpoint-submissions";

type useFilterAndSortServicesProps = AllServiceStaticDataType | null;

const useFilterAndSortServices = (
  allServicesStaticData: useFilterAndSortServicesProps,
) => {
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

  // filter services

  const filteredAndSortedServiceStaticData = allServicesStaticData?.filter((service) => {
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

  // sort filtered services
  
  if (filteredAndSortedServiceStaticData) {
    filteredAndSortedServiceStaticData.sort((firstService, secondService) => {
      switch (sortBySearchParam) {
        case "category":
          return firstService.category.localeCompare(secondService.category);

        case "lowest price":
          return parseInt(firstService.price) - parseInt(secondService.price);

        case "highest price":
          return parseInt(secondService.price) - parseInt(firstService.price);

        case "on sale":
          if (firstService.sale && !secondService.sale) {
            return -1;
          }
          if (!firstService.sale && secondService.sale) {
            return 1;
          }
          return 0;
        case "most popular":
          return secondService.popularity - firstService.popularity;
        case "a-z":
          return firstService.service.localeCompare(secondService.service);
        case "z-a":
          return secondService.service.localeCompare(firstService.service);
      }
    });
  }

  return filteredAndSortedServiceStaticData;
};

export default useFilterAndSortServices;
