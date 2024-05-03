"use client";
import { LayoutGroup, motion } from "framer-motion";
import { useState, useEffect } from "react";
import NavbarPrivate from "@/frontend/sections/navbar-private/navbar-private";
import NavbarBookServicesContent from "@/frontend/sections/mavbar-book-services-content/navbar-book-services-content";

import ContentAreaBook from "./sub-components/content-area-bool";
import GreetingModal from "@/frontend/sections/greeting-modal/greeting-modal";

const Book = () => {
  const [areNavbarsExpanded, setAreNavbarsExpanded] = useState(true);

  useEffect(() => {
    setModalsObject((previousModalObject) => ({
      ...previousModalObject,
      greetingModal: {
        ...previousModalObject.greetingModal,
        isModalShown: true,
      },
    }));
  }, []);

  const [modalObject, setModalsObject] = useState({
    greetingModal: {
      isModalShown: false,
    },
    notificationModal: {
      isModalShown: false,
      message: "",
    },

    bookModal: {
      isModalShown: false,
      serviceId: null,
      serviceName: "",
    },
  });

  const closeGreetingsModal: () => void = () => {
    setModalsObject((previousModalObject) => ({
      ...previousModalObject,
      greetingModal: {
        ...previousModalObject.greetingModal,
        isModalShown: false,
      },
    }));
  };

  return (
    <LayoutGroup>
      <div className="relative h-full w-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <GreetingModal
            isModalShown={modalObject.greetingModal.isModalShown}
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
                />
              </div>
              <motion.div
                layout
                className={`${
                  areNavbarsExpanded ? "me-10 ms-10" : " me-10 ms-2"
                } ${areNavbarsExpanded ? "max-h-[74vh]" : "max-h-[93vh]" } flex-grow justify-center overflow-y-auto rounded bg-neutral-200`}
              >
                <ContentAreaBook />
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </LayoutGroup>
  );
};

export default Book;
