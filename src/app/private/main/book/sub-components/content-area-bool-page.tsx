import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchAllServiceStaticData } from "@/utils/functions/fetch-data/services-endpoint-submissions";

import { ServiceStaticDataType } from "@/utils/functions/fetch-data/services-endpoint-submissions";

import ServiceCard from "./service-card";

const ContentAreaBookPage = () => {
  const [unfilteredUnsortedServiceData, setUnfilteredUnsortedServiceData] =
    useState<ServiceStaticDataType[]>();

  useEffect(() => {
    const initializeServicesStaticData = async () => {
      const data: ServiceStaticDataType[] = await fetchAllServiceStaticData();
      if (data) {
        setUnfilteredUnsortedServiceData(data);
      }
    };

    initializeServicesStaticData();
  }, []);

  return (
    <div className="space-y-2">
      {unfilteredUnsortedServiceData?.map((service: Record<string, any>) => {
        return (
          <div key={service.id} className="">
            <ServiceCard service={service.service} id={service.id} />
          </div>
        );
      })}{" "}
    </div>
  );
};

export default ContentAreaBookPage;
