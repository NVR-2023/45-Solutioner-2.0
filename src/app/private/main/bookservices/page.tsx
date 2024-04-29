"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import NavbarBookServicesContent from "@/frontend/sections/mavbar-book-services-content/navbar-book-services-content";

const BookServices = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(true);

  return (
    <div
      className={`flex h-screen ${isNavbarExpanded ? "flex-col" : "flex-row"} space-y-2 `}
    >
      <div className="mt-2">
        <NavbarBookServicesContent
          isNavbarExpanded={isNavbarExpanded}
          setIsNavbarExpanded={setIsNavbarExpanded}
        />
      </div>
      <motion.div
        layout
        className={`${
          isNavbarExpanded ? "mx-10" : "mx-2"
        } flex-grow rounded justify-center overflow-y-auto bg-green-300`}
      ></motion.div>
    </div>
  );
};

export default BookServices;
