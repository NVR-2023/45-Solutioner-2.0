import { motion } from "framer-motion";
import { AllServiceStaticDataType } from "@/utils/functions/fetch-data/services-endpoint-submissions";

import ServiceRollup from "./service-rollup";

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
              initial={{ 
                opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, delay: 0.05 * index },
              }}
              key={service.id}
            >
            
              <ServiceRollup
                category={service.category}
                service={service.service}
                duration={service.duration}
                price={service.price}
                description={service.description}
                unit={service.unit}
                included={service.included}
                personnel={service.personnel}
              />
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default ContentAreaBookPage;
