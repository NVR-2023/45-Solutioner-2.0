import { motion, stagger } from "framer-motion";
import { AllServiceStaticDataType } from "@/utils/functions/fetch-data/services-endpoint-submissions";

import ServiceCard from "./service-card";
import { useSearchParams } from "next/navigation";
import useFilterAndSortServices from "@/frontend/hooks/use-filter-and-sort-services";

type ContentAreaBookPageProps = {
  allServicesStaticData: AllServiceStaticDataType | null;
};

const ContentAreaBookPage = ({
  allServicesStaticData,
}: ContentAreaBookPageProps) => {


  /* const searchParams = useSearchParams();
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

  const sortBySearchParam = searchParams.get("sort by");
  const searchSearchParam = searchParams.get("search");

  const filteredServiceStaticData = allServicesStaticData?.filter((service) => {
    if (
      categorySearchParam !== "any" &&
      service.category !== categorySearchParam
    )
      {return false};

    if (
      priceSearchParam !== "any" &&
      (parseInt(service.price) < lowerPriceLimit! ||
        parseInt(service.price) > upperPriceLimit!)
    )
      {return false};

    if (
      searchSearchParam?.trim() !== "" &&
      !service.category.toLowerCase().includes(searchSearchParam) &&
      !service.service.toLowerCase().includes(searchSearchParam) &&
      !service.description.toLowerCase().includes(searchSearchParam)
    )
      {return false};
    
      return true;
  });
 */

  const filteredServiceStaticData = useFilterAndSortServices(allServicesStaticData);

  return (
    <motion.div className="flex justify-center py-2">
      {allServicesStaticData && (
        <motion.ul
          key="filtered and sorted list of services"
          className="space-y-2"
        >
      

          {filteredServiceStaticData!.map((service, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.1, delay: 0.05 * index },
              }}
              key={service.id}
            >
              <ServiceCard
                service={service.service}
                price={service.price}
                included={service.included}
                description={service.description}
                id={service.id}
              />
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default ContentAreaBookPage;
