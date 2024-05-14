import { motion, AnimatePresence } from "framer-motion";
import { AllServiceStaticDataType } from "@/utils/functions/fetch-data/services-endpoint-submissions";

import ServiceRollup from "../service-rollup";

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
          layout
          key="filtered and sorted list of services"
          className="space-y-2"
        >
          {filteredAndSortedServiceStaticData?.map((service, index) => (
            <motion.li layout key={service.id}>
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
