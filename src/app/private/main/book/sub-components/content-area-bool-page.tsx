import { motion } from "framer-motion";
import { AllServiceStaticDataType } from "@/utils/functions/fetch-data/services-endpoint-submissions";

import ServiceCard from "./service-card";

type ContentAreaBookPageProps = {
  allServicesStaticData: AllServiceStaticDataType | null;
};

const ContentAreaBookPage = ({
  allServicesStaticData,
}: ContentAreaBookPageProps) => {
  return (
    <div className="space-y-2">
      {allServicesStaticData?.map((service) => {
        return (
          <div key={service.id} className="">
            <ServiceCard service={service.service} id={service.id} />
          </div>
        );
      })}
    </div>
  );
};

export default ContentAreaBookPage;
