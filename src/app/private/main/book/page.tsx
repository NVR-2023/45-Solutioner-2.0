"use client";
import { LayoutGroup, motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  fetchAllServiceStaticData,
  AllServiceStaticDataType,
} from "@/utils/functions/fetch-data/services-endpoint-submissions";

import NavbarPrivate from "@/frontend/sections/navbar-private/navbar-private";
import NavbarBookServicesContent from "@/frontend/sections/mavbar-book-services-content/navbar-book-services-content";
import { useSearchParams } from "next/navigation";

import ContentAreaBookPage from "./sub-components/content-area-bool-page";
import GreetingModal from "@/frontend/sections/greeting-modal/greeting-modal";

const Book = () => {
  const [areNavbarsExpanded, setAreNavbarsExpanded] = useState(true);
  const [allServicesStaticData, setAllServicesStaticData] =
    useState<AllServiceStaticDataType>(null);
  const [
    filteredAndSortedServicesStaticData,
    setFilteredAndSortedServicesStaticData,
  ] = useState<AllServiceStaticDataType>(null);

  const searchParams = useSearchParams();

  const [modalsObject, setModalsObject] = useState({
    greetUserModal: {
      isGreetUserModalShown: false,
    },
    notificationModal: {
      isNotificationModalShown: false,
      message: "",
    },

    bookModal: {
      isBookModalShown: false,
      serviceId: null,
      serviceName: "",
    },
  });

  useEffect(() => {
    const initializeServicesStaticData = async () => {
      const data: AllServiceStaticDataType | null =
        await fetchAllServiceStaticData();
      if (data) {
        setAllServicesStaticData(data);
      }
    };

    initializeServicesStaticData();
  }, []);

  useEffect(() => {
    setModalsObject((previousModalObject) => ({
      ...previousModalObject,
      greetUserModal: {
        ...previousModalObject.greetUserModal,
        isGreetUserModalShown: true,
      },
    }));
  }, []);

  useEffect(() => {
    console.log("Unsorted Start:", allServicesStaticData);

    if (!allServicesStaticData) return;

    const categorySearchParam = searchParams.get("category");
    const priceSearchParam = searchParams.get("price");
    let lowerPriceLimit: number | null = null;
    let upperPriceLimit: number | null = null;
    if (priceSearchParam && priceSearchParam !== "any") {
      const priceRange = priceSearchParam.split("-");
      lowerPriceLimit = parseInt(priceRange[0].slice(1));
      upperPriceLimit = parseInt(priceRange[1]);
    }
    const searchSearchParam = searchParams.get("search");
    const sortBySearchParam = searchParams.get("sort by");

    console.log(
      "SearchParams Mid:",
      categorySearchParam,
      priceSearchParam,
      searchSearchParam,
      sortBySearchParam,
    );

    const filteredAndSortedData = allServicesStaticData
      .filter((service) => {
        if (
          categorySearchParam &&
          categorySearchParam !== "any" &&
          service.category !== categorySearchParam
        ) {
          return false;
        }

        if (
          priceSearchParam &&
          priceSearchParam !== "any" &&
          (parseInt(service.price) < lowerPriceLimit! ||
            parseInt(service.price) > upperPriceLimit!)
        ) {
          return false;
        }

        if (
          searchSearchParam &&
          searchSearchParam.trim() !== "" &&
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
          default:
            return 0;
        }
      });
    console.log("Unsorted end:", allServicesStaticData);
    console.log("Filtered&Sorted:", filteredAndSortedData);
    setFilteredAndSortedServicesStaticData(filteredAndSortedData);
  }, [allServicesStaticData, searchParams]);

  const closeGreetingsModal: () => void = () => {
    setModalsObject((previousModalObject) => ({
      ...previousModalObject,
      greetUserModal: {
        ...previousModalObject.greetUserModal,
        isGreetUserModalShown: false,
      },
    }));
  };

  return (
    <LayoutGroup>
      <div className="relative h-full w-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <GreetingModal
            isModalShown={modalsObject.greetUserModal.isGreetUserModalShown}
            closeGreetingsModal={closeGreetingsModal}
          />
        </div>
        <main className=" m-0 flex h-screen w-screen items-center justify-center bg-neutral-100 p-0">
          <div className="mt-6 flex h-full w-11/12 flex-col">
            <div>
              <NavbarPrivate areNavbarsExpanded={areNavbarsExpanded} />
            </div>
            <div
              className={`flex h-screen ${areNavbarsExpanded ? "flex-col" : "flex-row"} space-y-2`}
            >
              <div className="mt-2">
                <NavbarBookServicesContent
                  areNavbarsExpanded={areNavbarsExpanded}
                  setAreNavbarsExpanded={setAreNavbarsExpanded}
                  allServicesStaticData={allServicesStaticData}
                />
              </div>
              <motion.div
                layout
                className={`${
                  areNavbarsExpanded ? "me-10 ms-10" : " me-10 ms-2"
                } ${areNavbarsExpanded ? "max-h-[74vh]" : "max-h-[93vh]"} flex-grow justify-center overflow-y-auto rounded bg-neutral-200`}
              >
                <ContentAreaBookPage
                  filteredAndSortedServiceStaticData={
                    filteredAndSortedServicesStaticData
                  }
                />
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </LayoutGroup>
  );
};

export default Book;
