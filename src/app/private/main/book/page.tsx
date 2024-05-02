"use client";
import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import NavbarPrivate from "@/frontend/sections/navbar-private/navbar-private";
import NavbarBookServicesContent from "@/frontend/sections/mavbar-book-services-content/navbar-book-services-content";

import ContentAreaBook from "./sub-components/content-area-bool";

const Book = () => {
  const [areNavbarsExpanded, setAreNavbarsExpanded] = useState(true);

  return (
    <LayoutGroup>
      <main className="m-0 flex h-screen w-screen items-center justify-center bg-neutral-100 p-0">
        <div className="mt-6 flex h-full w-11/12 flex-col">
          {areNavbarsExpanded && (
            <div>
              <NavbarPrivate areNavbarsExpanded={areNavbarsExpanded} />
            </div>
          )}
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
              } flex-grow justify-center overflow-y-auto rounded bg-green-300`}
            >
              <ContentAreaBook />
            </motion.div>
          </div>
        </div>
      </main>
    </LayoutGroup>
  );
};

export default Book;
