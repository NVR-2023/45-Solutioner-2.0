import { motion, stagger } from "framer-motion";
import { AllServiceStaticDataType } from "@/utils/functions/fetch-data/services-endpoint-submissions";

import ServiceCard from "./service-card";

type ContentAreaBookPageProps = {
  allServicesStaticData: AllServiceStaticDataType | null;
};

const ContentAreaBookPage = ({
  allServicesStaticData,
}: ContentAreaBookPageProps) => {
  return (
    <div>
      {allServicesStaticData && (
        <motion.ul
          key="filtered and sorted list of services"
          className="space-y-2"
        >
          {allServicesStaticData.map((service) => (
            <li key={service.id} className="">
              <ServiceCard service={service.service} id={service.id} />
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};



export default ContentAreaBookPage;
