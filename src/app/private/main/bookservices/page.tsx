"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import NavbarBookServicesContent from "@/frontend/sections/mavbar-book-services-content/navbar-book-services-content";

const BookServices = () => {
  const [areNavbarsExpanded, setAreNavbarsExpanded] = useState(true);

  return (
    <div
      className={`flex h-screen ${areNavbarsExpanded ? "flex-col" : "flex-row"} space-y-2 `}
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
          areNavbarsExpanded ? "ms-10 me-6'" : "ms-2 me-20"
        } flex-grow justify-center overflow-y-auto rounded bg-green-300`}
      ></motion.div>
    </div>
  );
};

export default BookServices;
