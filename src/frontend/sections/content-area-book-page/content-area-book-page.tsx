import { motion } from "framer-motion";
import { MouseEvent } from "react";
import { AllServiceStaticDataType } from "@/utils/functions/fetch-all-services-static-data/fetch-all-services-static-data";
import {
  useBookServiceModalContext,
  BookServiceModalContextType,
} from "@/frontend/contexts/use-book-service-modal-context";

import ServiceRollup from "../../components/ui/service-rollup/service-rollup";

type ContentAreaBookPageProps = {
  filteredAndSortedServiceStaticData: AllServiceStaticDataType | null;
};

const ContentAreaBookPage = ({
  filteredAndSortedServiceStaticData,
}: ContentAreaBookPageProps) => {
  const { setBookServiceModalContext } = useBookServiceModalContext();

  const handleOnBookButtonClick = (event: MouseEvent<HTMLUListElement>) => {
    console.log("ENtering function");
    const target = event.target as HTMLElement;

    console.log(target.tagName);

    if (target.tagName === "BUTTON" || "SPAN") {
      const id = parseInt(target.getAttribute("data-id")!) ?? null;
      const service = target.getAttribute("data-service");
      const duration = target.getAttribute("data-duration");
      const price = target.getAttribute("data-price");

      setBookServiceModalContext(
        (previousBookServiceModalObject: BookServiceModalContextType) => ({
          ...previousBookServiceModalObject,
          id: id,
          service: service,
          duration: duration,
          price: price,
          isBookServiceModalOpen: true,
        }),
      );
    }
  };

  return (
    <motion.div className="flex justify-center py-2">
      {filteredAndSortedServiceStaticData && (
        <motion.ul
          layout
          key="filtered and sorted list of services"
          onClick={handleOnBookButtonClick}
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
