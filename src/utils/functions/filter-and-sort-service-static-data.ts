import { AllServiceStaticDataType } from "@/utils/functions/fetch-data/services-endpoint-submissions";

type filterAndSortServicesStaticDataProps = {
  allServicesStaticData: AllServiceStaticDataType | null;
  filterAndSortCriteriaObject: Record<string, string>;
};

const filterAndSortServicesStaticData = ({
  allServicesStaticData,
  filterAndSortCriteriaObject,
}: filterAndSortServicesStaticDataProps) => {
  const categorySearchParam = filterAndSortCriteriaObject.category;
  const priceSearchParam = filterAndSortCriteriaObject.price;

  let lowerPriceLimit = null;
  let upperPriceLimit = null;

  if (priceSearchParam) {
    lowerPriceLimit =
      priceSearchParam !== "any"
        ? parseInt(priceSearchParam!.split("-")[0].slice(1))
        : null;

    upperPriceLimit =
      priceSearchParam !== "any"
        ? parseInt(priceSearchParam!.split("-")[1])
        : null;
  }

  const searchSearchParam = filterAndSortCriteriaObject.search;
  const sortBySearchParam = filterAndSortCriteriaObject.sort;

  const filteredAndSortedServiceStaticData = allServicesStaticData
    ?.filter((service) => {
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
    })
    .sort((firstService, secondService) => {
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

  return filteredAndSortedServiceStaticData;
};

export default filterAndSortServicesStaticData;
