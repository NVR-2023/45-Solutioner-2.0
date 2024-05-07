import { motion } from "framer-motion";
import { AllServiceStaticDataType } from "@/utils/functions/fetch-data/services-endpoint-submissions";

import ServiceCard from "./service-card";
import { ServiceRollUp } from "./old-card";

import ServiceRollup from "./service-rollup";
import useFilterAndSortServices from "@/frontend/hooks/use-filter-and-sort-services";

type ContentAreaBookPageProps = {
  filteredAndSortedServiceStaticData: AllServiceStaticDataType | null;
};

const ContentAreaBookPage = ({
  filteredAndSortedServiceStaticData,
}: ContentAreaBookPageProps) => {
  return (
    <motion.div className="flex justify-center py-2">
      {filteredAndSortedServiceStaticData && (
        <motion.ul
          key="filtered and sorted list of services"
          className="space-y-2"
        >
          {filteredAndSortedServiceStaticData?.map((service, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.1, delay: 0.05 * index },
              }}
              key={service.id}
            >
       {/*        <ServiceRollUp
                category={service.category}
                service={service.service}
                description={service.description}
                price={service.price}
                included={service.included}
                unit={service.unit}
                personnel={service.personnel}
                duration={service.duration}
                id={service.id}
              /> */}
              <ServiceRollup />
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default ContentAreaBookPage;
