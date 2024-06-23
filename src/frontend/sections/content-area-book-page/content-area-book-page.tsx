import { motion } from "framer-motion";
import { AllServiceStaticDataType } from "@/utils/functions/fetch-all-services-static-data/fetch-all-services-static-data";

import ServiceRollup from "../../components/ui/service-rollup/service-rollup";

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
                id={service.id}
                duration={service.duration}
                price={service.price}
                sale={service.sale}
                saleExpiresBy={service.saleExpiresBy}
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
