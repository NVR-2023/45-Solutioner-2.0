import React from "react";
import { motion } from "framer-motion";

const CategoryMarquee = () => {
  const CATEGORY_ARRAY: string[] = [
    "wellness",
    "wardrobe",
    "security",
    "plumbing",
    "petcare",
    "patching",
    "nursing",
    "nannying",
    "hvac",
    "handyman",
    "grooming",
    "gardening",
    "extermination",
    "eventing",
    "electrical",
    "companionship",
    "cleaning",
  ];

  const VARIANTS = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: 0,
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const MAEQUEE_HALF = (
    <motion.div
      variants={VARIANTS}
      initial="initial"
      animate="animate"
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex"
    >
      {CATEGORY_ARRAY.map((category, index) => {
        return (
          <div
            className="me-2 flex justify-center rounded border-[1px] border-[#fc6900] px-1 py-0.5 text-xs font-bold tracking-wide small-caps"
            key={index}
          >
            {category}
          </div>
        );
      })}
    </motion.div>
  );

  return (
    <div className="flex w-16 flex-col -space-y-1.5 overflow-clip">
      <div className="mb-[12px] flex">
        {MAEQUEE_HALF}
        {MAEQUEE_HALF}
      </div>
      <div className="text-[.625rem] font-extrabold tracking-wide ">
        Categories
      </div>
    </div>
  );
};

export default CategoryMarquee;
